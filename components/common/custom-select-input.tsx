import React from 'react'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Control } from 'react-hook-form'
import { Category } from '@/type'

interface ICustomSelectInput {
  control: Control<any, any, any>
  categories: Category[]
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
              value={field.value?.toString() ?? ''}
              onChange={e => {
                const selected = e.target.value
                field.onChange(selected ? Number(selected) : '')
              }}
            >
              <option value=''>Select a category</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
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
