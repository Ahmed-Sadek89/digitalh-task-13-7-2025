'use client'

import { toast } from 'sonner'
import { ProductFormData } from '@/schema/product-schema'
import { useProductStore } from '@/store/product-store'

const useProductCreate = (
  startLoading: () => void,
  stopLoading: () => void,
  onOpenChange: () => void
) => {
  const { productStore, setProductStore } = useProductStore()
  return async function onSubmit (values: ProductFormData) {
    startLoading()
    try {
      const result = await fetch('/api/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...values, images: values.images.split(',') })
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
        toast.success('New product is added successfully!')
        setProductStore([data, ...productStore])
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

export default useProductCreate
