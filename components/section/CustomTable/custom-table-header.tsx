'use client'
import { Table } from '@tanstack/react-table'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'

import { Product } from '@/type'

const CustomTableHeader = ({ table }: { table: Table<Product> }) => {
  return (
    <div className='flex items-center py-4'>
      <Input
        placeholder='Filter Titles...'
        value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
        onChange={event =>
          table.getColumn('title')?.setFilterValue(event.target.value)
        }
        className='max-w-sm'
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' className='ml-auto text-black'>
            Show/Hide Columns <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          {table
            .getAllColumns()
            .filter(column => column.getCanHide())
            .map(column => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className='capitalize'
                  checked={column.getIsVisible()}
                  onCheckedChange={value => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              )
            })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default CustomTableHeader
