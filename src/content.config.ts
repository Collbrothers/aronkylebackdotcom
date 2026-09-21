import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import {glob} from "astro/loaders";

const projects = defineCollection({
    loader: glob({pattern: '**/*.md', base: './src/content/projects'}),
    schema: z.object({
        title: z.string(),
        description: z.string().max(155),
        stack: z.array(z.string()),
        role: z.string().optional(),
        repository: z.url().optional(),
        website: z.url().optional(),
        date: z.coerce.date(),
        featured: z.boolean().default(false),
    })
});

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().max(155),
        date: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
    }),
});

export const collections = { projects, blog };
