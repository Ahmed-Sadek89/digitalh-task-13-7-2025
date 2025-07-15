'use client'

import { toast } from 'sonner'
import { ProductFormData } from '@/schema/product-schema'
import { useProductStore } from '@/store/product-store'

const useProductEdit = (
  startLoading: () => void,
  stopLoading: () => void,
  onOpenChange: () => void,
  product_id: number
) => {
  const { productStore, setProductStore } = useProductStore()
  return async function onSubmit (values: ProductFormData) {
    startLoading()
    try {
      const result = await fetch(`/api/product/${product_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...values,
          images: (values.images as string)
            .split(',')
            .map(img => img.trim())
            .filter(img => img !== '')
        })
      })

      const data = await result.json()
      if (!result.ok || !data.id) {
        const messages = Array.isArray(data.message)
          ? data.message
          : [data.message || 'Something went wrong']

        toast.error('Validation Errors', {
          description: messages
            ?.map((msg: string, i: number) => `${i + 1}. ${msg}`)
            .join('\n')
        })
      } else {
        toast.success(`Product number ${product_id} is updated successfully!`)
        setProductStore(
          productStore.map(index => (index.id === data.id ? data : index))
        )
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

export default useProductEdit
