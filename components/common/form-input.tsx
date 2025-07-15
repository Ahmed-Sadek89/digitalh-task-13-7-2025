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
}
const FormInput = ({
  control,
  label,
  name,
  type = 'text',
  placeholder = ''
}: IFormInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className={`font-medium ${'text-black'}`}>
            {label}
          </FormLabel>
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              className={
                'bg-white border-black text-black placeholder:text-gray-800 focus-within:bg-white focus:bg-white'
              }
              {...field}
              onChange={e =>
                type === 'number'
                  ? field.onChange(
                      e.target.value === '' ? '' : e.target.valueAsNumber
                    )
                  : field.onChange(e.target.value)
              }
            />
          </FormControl>
          <FormMessage className='text-red-600' />
        </FormItem>
      )}
    />
  )
}

export default FormInput
