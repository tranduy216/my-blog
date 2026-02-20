import { defineCollection, z } from "astro:content";

const technical = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string(),
  }),
});

const physical = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string(),
  }),
});


const mental = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string(),
  }),
});

export const collections = {
  technical,
  physical,
  mental,
};