'use client'
import * as React from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Product } from '@/type'
import CustomMenuForTableRow from './custom-menu-for-table-row'
export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => {
      return (
        <Button
          variant={'link'}
          className='flex items-center gap-x-2 m-0 p-0 text-white'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          <span>Id</span>
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className='text-white capitalize'>{row.getValue('id')}</div>
    )
  },
  {
    accessorKey: 'title',
    header: () => <div className='text-white'>Title</div>,
    cell: ({ row }) => (
      <div className='text-white capitalize'>{row.getValue('title')}</div>
    )
  },
  {
    accessorKey: 'slug',
    header: () => <div className='text-white'>Slug</div>,
    cell: ({ row }) => (
      <div className='text-white capitalize'>{row.getValue('slug')}</div>
    )
  },
  {
    accessorKey: 'description',
    header: () => <div className='text-white'>Description</div>,
    cell: ({ row }) => {
      const description = row.original.description
      return (
        <div className='text-white capitalize'>
          {description.split(' ').slice(0, 3).join(' ') + '...'}
        </div>
      )
    }
  },
  {
    accessorKey: 'price',
    header: ({ column }) => {
      return (
        <Button
          variant={'link'}
          className='flex items-center gap-x-2 p-0 text-white'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          <span>Price</span>
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => {
      const price = parseFloat(row.getValue('price'))

      // Format the price as a dollar price
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(price)

      return <div className='font-medium'>{formatted}</div>
    }
  },
  {
    accessorKey: 'category',
    header: ({ column }) => {
      return (
        <Button
          variant={'link'}
          className='flex items-center gap-x-2 m-0 p-0 text-white'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          <span>Category</span>
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => {
      const category = row.original.category

      return (
        <div className='flex items-center gap-x-3'>
          <img
            src={`${category.image}/png`}
            alt={category.name}
            width={40}
            height={40}
            className='rounded-full w-[40px] h-[40px] object-cover'
          />
          <span className='text-white capitalize'>{category.name}</span>
        </div>
      )
    }
  },
  {
    accessorKey: 'images',
    header: () => <div className='text-white'>Images</div>,
    cell: ({ row }) => {
      const images = row.original.images
      return (
        <div className='flex items-center gap-x-3'>
          {images?.map((image, index) => (
            <img
              src={`${image}/png`}
              key={index}
              alt={`${image}/png`}
              className='rounded-full w-[30] h-[30]'
            />
          ))}
        </div>
      )
    }
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const product = row.original

      return <CustomMenuForTableRow id={product.id.toString()} />
    }
  }
]
