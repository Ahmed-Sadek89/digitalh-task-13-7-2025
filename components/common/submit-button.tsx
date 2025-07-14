import { Button } from '../ui/button'

interface ISubmitButton {
  isLoading: boolean
  loadingText: string
  text: string
}
const SubmitButton = ({ isLoading, loadingText, text }: ISubmitButton) => {
  return (
    <Button
      type='submit'
      className='bg-black hover:bg-gray-800 focus:ring-black w-full text-white cursor-pointer'
      disabled={isLoading}
    >
      {isLoading ? loadingText : text}
    </Button>
  )
}

export default SubmitButton
