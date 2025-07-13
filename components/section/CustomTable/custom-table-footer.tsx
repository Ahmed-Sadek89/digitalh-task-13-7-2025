import { Button } from '@/components/ui/button'
import { Product } from '@/type'
import { Table } from '@tanstack/react-table'
import React from 'react'

const CustomTableFooter = ({ table }: { table: Table<Product> }) => {
  return (
    <div className='flex justify-end items-center space-x-2 py-4'>
      <div className='flex-1 text-muted-foreground text-sm'>
        {table.getFilteredRowModel().rows.length} row(s) 
      </div>
      <div className='space-x-2'>
        <Button
          variant='outline'
          size='sm'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className='text-black'
        >
          Previous
        </Button>
        <Button
          variant='outline'
          size='sm'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className='text-black'
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export default CustomTableFooter
