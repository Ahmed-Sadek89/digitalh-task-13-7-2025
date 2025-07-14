'use client'

import { useState, useCallback } from 'react'
import { MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import ViewProduct from './Product/view-product'
import ViewEditProduct from './Product/view-edit-product'
import ViewDeleteProduct from './Product/view-delete-product'
import { Product } from '@/type'

const CustomMenuForTableRow = ({ data }: { data: Product}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [dialogType, setDialogType] = useState<
    'view' | 'edit' | 'delete' | null
  >(null)


  const openDialog = (type: 'view' | 'edit' | 'delete') => {
    if (data) {
      setSelectedProduct(data)
      setDialogType(type)
    }
  }

  const closeDialog = useCallback(() => {
    setDialogType(null)
  }, [])

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='p-0 w-8 h-8'>
            <span className='sr-only'>Open menu</span>
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => openDialog('view')}>
            View Product
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => openDialog('edit')}>
            Edit Product
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => openDialog('delete')}>
            Delete Product
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {selectedProduct && (
        <>
          <ViewProduct
            open={dialogType === 'view'}
            onOpenChange={closeDialog}
            product={selectedProduct}
          />
          <ViewEditProduct
            open={dialogType === 'edit'}
            onOpenChange={closeDialog}
            product={selectedProduct}
            // categories={[
            //   { id: 1, name: 'Electronics' },
            //   { id: 2, name: 'Accessories' }
            // ]}
            // onSubmit={data => {
            //   console.log('Edit product:', data)
            //   closeDialog()
            // }}
          />
          <ViewDeleteProduct
            open={dialogType === 'delete'}
            onOpenChange={closeDialog}
            product={selectedProduct}
            // onDelete={() => {
            //   console.log('Deleted product:', selectedProduct.id)
            //   closeDialog()
            // }}
          />
        </>
      )}
    </>
  )
}

export default CustomMenuForTableRow
