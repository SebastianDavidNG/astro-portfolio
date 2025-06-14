// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(), // también puedes usar z.date() si prefieres
  }),
});

export const collections = {
  blog: blogCollection,
};
