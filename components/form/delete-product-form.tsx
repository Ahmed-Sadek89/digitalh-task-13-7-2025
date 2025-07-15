import React from 'react'
import { SubmitButton } from '../common'
import { useLoadingAction } from '@/hooks'
import { Button } from '../ui/button'
import { Product } from '@/type'
import useDeleteProduct from '@/hooks/use-product-delete'

const DeleteProductForm = ({
  handleOpen,
  product
}: {
  handleOpen: () => void
  product: Product
}) => {
  const { isLoading, startLoading, stopLoading } = useLoadingAction()
  const handleDeleteProduct = useDeleteProduct(
    startLoading,
    stopLoading,
    handleOpen,
    product.id
  )
  return (
    <form
      className='justify-evenly items-center gap-x-3 grid grid-cols-2 py-5 w-full'
      onSubmit={handleDeleteProduct}
    >
      <SubmitButton
        isLoading={isLoading}
        text={'Delete'}
        loadingText={'Deleting'}
      />
      <Button
        type='button'
        className='bg-black hover:bg-gray-800 focus:ring-black w-full text-white cursor-pointer'
        onClick={handleOpen}
        disabled={isLoading}
      >
        Cancel
      </Button>
    </form>
  )
}

export default DeleteProductForm
