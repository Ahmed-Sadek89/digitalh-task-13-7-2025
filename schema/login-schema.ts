import * as z from 'zod'

export const loginFormSchema = z.object({
  email: z
    .email('Please enter a valid email address')
    .min(1, 'Email is required'),
  password: z
    .string()
    .min(1, 'Password is required')
})

export type LoginFormData = z.infer<typeof loginFormSchema>
