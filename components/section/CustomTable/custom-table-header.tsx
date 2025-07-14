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

import { Product } from '@/type'
import { useCallback, useState } from 'react'
import ViewAddProduct from './Product/view-add-product'
import CustomTableSearchInput from './custom-table-search-input'

const CustomTableHeader = ({ table }: { table: Table<Product> }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = useCallback(() => {
    setOpen(prev => !prev)
  }, [])

  return (
    <>
      <div className='flex flex-wrap justify-between items-center gap-3 py-4'>
        <div className='flex sm:flex-row flex-col items-start sm:items-center gap-3'>
          <CustomTableSearchInput />
          <Button
            variant='outline'
            className='text-black'
            onClick={() => handleOpen()}
          >
            Create New Product
          </Button>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' className='text-black'>
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
      <ViewAddProduct open={open} onOpenChange={handleOpen} />
    </>
  )
}

export default CustomTableHeader
