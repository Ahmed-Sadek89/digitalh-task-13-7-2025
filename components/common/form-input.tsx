import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Control } from 'react-hook-form'

interface IFormInput {
  control: Control<any, any, any>
  label: string
  name: string
  type?: string
  placeholder?: string
  customStyle?: string
}
const FormInput = ({
  control,
  label,
  name,
  type = 'text',
  placeholder = '',
  customStyle = 'bg-black border-white focus:border-white focus:ring-white text-white placeholder:text-gray-400'
}: IFormInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel
            className={`font-medium ${
              customStyle ? 'text-black' : 'text-white'
            }`}
          >
            {label}
          </FormLabel>
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              className={customStyle}
              {...field}
            />
          </FormControl>
          <FormMessage className='text-red-600' />
        </FormItem>
      )}
    />
  )
}

export default FormInput
