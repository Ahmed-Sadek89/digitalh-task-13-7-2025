import { LoginForm } from '@/components/form/login-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: 'For DigitalH Task description'
}
export default function LoginPage () {
  return (
    <div className='flex justify-center items-center bg-black min-h-screen'>
      <LoginForm />
    </div>
  )
}
