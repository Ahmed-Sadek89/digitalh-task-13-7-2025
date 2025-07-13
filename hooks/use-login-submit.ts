'use client'

import { LoginFormData } from '@/schema/login-schema'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const useLoginSubmit = (startLoading: () => void, stopLoading: () => void) => {
  const router = useRouter()
  return async function onSubmit (values: LoginFormData) {
    startLoading()

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))

      console.log('Form submitted:', values)

      toast.success('Login successful!', {
        description: 'Welcome back! You have been successfully logged in.'
      })
      
      router.push('/dashboard')
    } catch (error) {
      toast.error('Login failed', {
        description: 'Please check your credentials and try again.',
        unstyled: true
      })
    } finally {
      stopLoading()
    }
  }
}

export default useLoginSubmit
