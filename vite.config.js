import { defineConfig } from 'vite';
import critical from 'vite-plugin-critical';

export default defineConfig({
  plugins: [
    critical({
      criticalUrl: '',
      criticalBase: './dist/',
      criticalPages: [
        { uri: '', template: 'index' },
      ],
    })
  ],
});
s