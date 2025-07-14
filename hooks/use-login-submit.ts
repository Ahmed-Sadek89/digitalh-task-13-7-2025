'use client'
import type { LoginFormData } from '@/schema/login-schema'
import { toast } from 'sonner'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const useLoginSubmit = (startLoading: () => void, stopLoading: () => void) => {
  const router = useRouter()

  return async function onSubmit (values: LoginFormData) {
    startLoading()
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: values.email,
        password: values.password
      })

      if (result?.error) {
        toast.error('Login failed', {
          description: 'Please check your credentials and try again.'
        })
      } else if (result?.ok) {
        toast.success('Login successful!', {
          description: 'Welcome back! You have been successfully logged in.'
        })
        router.push('/dashboard')
      }
    } catch (error) {
      toast.error('An unexpected error occurred', {
        description: 'Please try again later.'
      })
    } finally {
      stopLoading()
    }
  }
}

export default useLoginSubmit
