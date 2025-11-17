import { z } from 'zod';

export const postSchema = z.object({
  title: z
    .string()
    .min(3, 'Title must be at least 3 characters')
    .max(100, 'Title must be under 100 characters'),
  content: z
    .string()
    .min(10, 'Content must be at least 10 characters')
    .max(5000, 'Content is too long'),
  authorId: z
    .number({ invalid_type_error: 'Author ID must be a number' })
    .int()
    .positive('Author ID must be a positive integer'),
})