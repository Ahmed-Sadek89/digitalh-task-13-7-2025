import React from 'react'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Control } from 'react-hook-form'
interface ICustomSelectInput {
  control: Control<any, any, any>
  categories: string[]
}
const CustomSelectInput = ({ control, categories }: ICustomSelectInput) => {
  return (
    <FormField
      control={control}
      name='categoryId'
      render={({ field }) => (
        <FormItem>
          <FormLabel className='text-black'>Category</FormLabel>
          <FormControl>
            <select
              className='bg-white p-2 border border-black rounded-lg w-full text-black'
              {...field}
            >
              {categories.map(cat => (
                // <option key={cat.id} value={cat.id}>
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </FormControl>
          <FormMessage className='text-red-600' />
        </FormItem>
      )}
    />
  )
}

export default CustomSelectInput
