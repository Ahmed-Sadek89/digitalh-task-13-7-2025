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
      className='bg-white hover:bg-gray-200 focus:ring-white w-full text-black cursor-pointer'
      disabled={isLoading}
    >
      {isLoading ? loadingText : text}
    </Button>
  )
}

export default SubmitButton
