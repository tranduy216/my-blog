import { defineCollection, z } from "astro:content";

/* ---------- */
/*  Schema    */
/* ---------- */

const postSchema = z.object({
  title: z.string(),
  date: z.string(),
  description: z.string().optional(),
  draft: z.boolean().default(false),
});

/* ---------- */
/*  Collections */
/* ---------- */

export const collections = {
  // VI
  "vi/technical": defineCollection({ schema: postSchema }),
  "vi/physical": defineCollection({ schema: postSchema }),
  "vi/mental": defineCollection({ schema: postSchema }),

  // EN
  "en/technical": defineCollection({ schema: postSchema }),
  "en/physical": defineCollection({ schema: postSchema }),
  "en/mental": defineCollection({ schema: postSchema }),
};