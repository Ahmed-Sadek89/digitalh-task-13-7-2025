import { Toaster } from 'sonner'

const SonnerMsg = () => {
  return (
    <Toaster
      position='bottom-right'
      toastOptions={{
        duration: 5000
      }}
    />
  )
}

export default SonnerMsg
