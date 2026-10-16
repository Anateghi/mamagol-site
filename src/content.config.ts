import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(70),
    description: z.string().min(80).max(170),
    h1: z.string(),
    category: z.enum(['بارداری', 'باروری', 'رشد کودک', 'تغذیه نوزاد', 'خرید و سایز']),
    tool: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).min(3),
    related: z.array(z.string()).default([]),
    products: z.array(z.object({ name: z.string(), query: z.string(), note: z.string() })).default([]),
  }),
});
export const collections = { blog };
