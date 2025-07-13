import { Login } from '@/components/section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: 'For DigitalH Task description'
}
export default function LoginPage () {
  return <Login />
}
