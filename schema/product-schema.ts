import * as z from 'zod'

export const ProductSchema = z.object({
  title: z.string().min(1),
  price: z.number().positive(),
  categoryId: z.number().positive(),
  description: z.string().min(1),
  images: z.array(z.string().url()).min(1)
})

export type ProductFormData = z.infer<typeof ProductSchema>
