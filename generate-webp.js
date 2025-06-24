import sharp from 'sharp';
import { globby } from 'globby';
import fs from 'fs-extra';
import path from 'path';

const inputDir = './public/images';
const outputSizes = [640, 1024]; // puedes agregar más tamaños si quieres

async function convertToWebP() {
  const images = await globby([`${inputDir}/**/*.{jpg,jpeg,png}`]);

  for (const file of images) {
    const ext = path.extname(file);
    const baseName = path.basename(file, ext);
    const dirName = path.dirname(file);

    const image = sharp(file);
    const metadata = await image.metadata();

    // 1. Imagen original convertida a WebP
    const webpPath = path.join(dirName, `${baseName}.webp`);
    await image.toFile(webpPath);
    console.log(`✅ ${webpPath}`);

    // 2. Imágenes redimensionadas
    for (const size of outputSizes) {
      if (metadata.width && metadata.width >= size) {
        const resizedPath = path.join(dirName, `${baseName}-${size}.webp`);
        await image.resize({ width: size }).toFile(resizedPath);
        console.log(`✅ ${resizedPath}`);
      }
    }
  }

  console.log('🎉 Conversión a WebP terminada.');
}

convertToWebP().catch((err) => {
  console.error('❌ Error durante la conversión:', err);
});
