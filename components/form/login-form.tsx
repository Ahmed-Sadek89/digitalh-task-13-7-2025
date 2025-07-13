'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { toast } from 'sonner'

const formSchema = z.object({
  email: z
    .email('Please enter a valid email address')
    .min(1, 'Email is required'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters long')
})

type FormData = z.infer<typeof formSchema>

export function LoginForm () {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  async function onSubmit (values: FormData) {
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      console.log('Form submitted:', values)

      // Show success toast
      toast.success('Login successful!', {
        description: 'Welcome back! You have been successfully logged in.'
      })

      // You can add your login logic here
      // For example: await signIn(values.email, values.password)
    } catch (error) {
      // Show error toast
      toast.error('Login failed', {
        description: 'Please check your credentials and try again.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className='bg-black border-white w-full max-w-md'>
      <CardHeader className='space-y-1 text-center'>
        <CardTitle className='font-bold text-white text-2xl'>Sign In</CardTitle>
        <CardDescription className='text-gray-300'>
          Enter your email and password to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-medium text-white'>
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='Enter your email'
                      className='bg-black border-white focus:border-white focus:ring-white text-white placeholder:text-gray-400'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='text-red-600' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-medium text-white'>
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='Enter your password'
                      className='bg-black border-white focus:border-white focus:ring-white text-white placeholder:text-gray-400'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='text-red-600' />
                </FormItem>
              )}
            />
            <Button
              type='submit'
              className='bg-white hover:bg-gray-200 focus:ring-white w-full text-black'
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>
        </Form>
        <div className='mt-4 text-center'>
          <a
            href='#'
            className='text-gray-300 hover:text-white text-sm underline'
          >
            Forgot your password?
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
