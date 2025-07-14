'use client'
import { toast } from 'sonner'
import { signOut } from 'next-auth/react'
import useLoadingAction from './use-loading-action'

const useHandleSignout = () => {
  const { isLoading, startLoading, stopLoading } = useLoadingAction()
  async function signoutEvent () {
    startLoading()
    await signOut()
      .then(() => {
        toast.success('Signout successful!')
      })
      .catch(() => {
        toast.success('Signout failed!')
      })
      .finally(() => {
        stopLoading()
      })
  }
  return { signoutEvent, isLoading }
}

export default useHandleSignout
