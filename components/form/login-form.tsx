'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form'
import { FormInput, CustomCard, SubmitButton } from '@/components/common'
import { LoginFormData, loginFormSchema } from '@/schema/login-schema'
import { useLoadingAction, useLoginSubmit } from '@/hooks'

const LoginForm = () => {
  const { isLoading, startLoading, stopLoading } = useLoadingAction()
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = useLoginSubmit(startLoading, stopLoading)

  return (
    <CustomCard
      title='Welcome back!'
      description='Enter your email and password to access your account'
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 py-4'>
          <FormInput
            control={form.control}
            name='email'
            label='Email'
            type='email'
            placeholder='Enter your email'
          />

          <FormInput
            control={form.control}
            name='password'
            label='Password'
            type='password'
            placeholder='Enter your password'
          />
          <SubmitButton
            isLoading={isLoading}
            text='Sign In'
            loadingText='Signing in...'
          />
        </form>
      </Form>
    </CustomCard>
  )
}

export default LoginForm
