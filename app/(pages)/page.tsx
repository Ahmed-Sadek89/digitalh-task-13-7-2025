import { Button } from '@/components/ui/button'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Login",
  description: 'For DigitalH Task description'
}
export default function Home () {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
