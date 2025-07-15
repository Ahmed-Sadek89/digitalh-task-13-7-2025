'use client'
import { toast } from 'sonner'
import { useProductStore } from '@/store/product-store'
import React from 'react'

const useDeleteProduct = (
  startLoading: () => void,
  stopLoading: () => void,
  onOpenChange: () => void,
  product_id: number
) => {
  const { productStore, setProductStore } = useProductStore()
  return async function onSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    startLoading()
    try {
      const result = await fetch(`/api/product/${product_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await result.json()
      console.log({ data })
      if (!result.ok) {
        const messages = Array.isArray(data.message)
          ? data.message
          : [data.message || 'Something went wrong']

        toast.error('Validation Errors', {
          description: messages
            ?.map((msg: string, i: number) => `${i + 1}. ${msg}`)
            .join('\n')
        })
      } else {
        toast.success(`Product number ${product_id} is deleted successfully!`)
        setProductStore(productStore.filter(index => index.id !== product_id))
        onOpenChange()
      }
    } catch (error: any) {
      toast.error('An unexpected error occurred', {
        description: error.message
      })
    } finally {
      stopLoading()
    }
  }
}

export default useDeleteProduct
