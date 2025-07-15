import { Toaster } from 'sonner'

const SonnerMsg = () => {
  return (
    <Toaster
      position='bottom-right'
      richColors
      closeButton
      toastOptions={{
        duration: 5000,
        classNames: {
          toast: 'mb-2' // spacing between toasts
        }
      }}
    />
  )
}

export default SonnerMsg
