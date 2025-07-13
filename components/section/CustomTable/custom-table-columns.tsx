'use client'
import * as React from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import Image from 'next/image'
import { Product } from '@/type'
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
          <Image
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
    header: () => <div className='text-white'>images</div>,
    cell: ({ row }) => {
      const images = row.original.images
      return (
        <div className='flex items-center gap-x-3'>
          {images?.map((image, index) => (
            <Image
              src={`${image}/png`}
              key={index}
              alt={`${image}/png`}
              width={30}
              height={30}
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
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='p-0 w-8 h-8'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(payment.id.toString())
              }
            >
              View Product
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit Product</DropdownMenuItem>
            <DropdownMenuItem>Delete Product</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]
