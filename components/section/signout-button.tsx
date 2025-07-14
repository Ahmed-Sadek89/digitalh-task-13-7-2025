'use client'
import useHandleSignout from '@/hooks/use-handle-signout'
import { Button } from '../ui/button'

const SignoutButton = () => {
  const { signoutEvent, isLoading } = useHandleSignout()

  return (
    <Button
      disabled={isLoading}
      onClick={signoutEvent}
      className='bg-red-500 cursor-pointer'
    >
      {isLoading ? 'Processing...' : 'Signout'}
    </Button>
  )
}

export default SignoutButton
