'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form'
import { FormInput, SubmitButton, CustomSelectInput } from '@/components/common'
import { useLoadingAction, useLoginSubmit } from '@/hooks'
import { ProductFormData, ProductSchema } from '@/schema/product-schema'
import { useEffect, useState } from 'react'
import { Category, Product } from '@/type'
import useProductCreate from '@/hooks/use-product-create'

const ProductForm = ({
  product,
  onOpenChange
}: {
  product?: Product
  onOpenChange: () => void
}) => {
  const { isLoading, startLoading, stopLoading } = useLoadingAction()
  const form = useForm<ProductFormData>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      title: '',
      price: 0,
      categoryId: 0,
      description: '',
      images: ''
    }
  })
  const onSubmit = product
    ? () => {}
    : useProductCreate(startLoading, stopLoading, onOpenChange)

  useEffect(() => {
    if (product) {
      form.reset({
        title: product.title,
        price: product.price,
        description: product.description,
        categoryId: product.category.id,
        images: product.images as unknown as string
      })
    }
  }, [product, form.reset])
  const [categories, setCategories] = useState<Category[]>([])
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch('/api/category')
      const data = await res.json()
      setCategories(data)
    }
    fetchCategories()
  }, [])
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 py-4'>
        <FormInput
          control={form.control}
          name='title'
          label='Title'
          type='text'
          placeholder='Enter Product title'
        />

        <FormInput
          control={form.control}
          name='description'
          label='Description'
          type='text'
          placeholder='Enter Product description'
        />

        <FormInput
          control={form.control}
          name='price'
          label='Price'
          type='number'
          placeholder='Enter Product price'
        />
        {categories && (
          <CustomSelectInput categories={categories} control={form.control} />
        )}

        <FormInput
          control={form.control}
          name='images'
          label='Images'
          type='text'
          placeholder='Enter Product Images'
        />
        <SubmitButton
          isLoading={isLoading}
          text={product ? 'Edit product' : 'Add a new Product'}
          loadingText={product ? 'Editing' : 'Adding'}
        />
      </form>
    </Form>
  )
}

export default ProductForm
