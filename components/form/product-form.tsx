'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form'
import { FormInput, SubmitButton, CustomSelectInput } from '@/components/common'
import { LoginFormData, loginFormSchema } from '@/schema/login-schema'
import { useLoadingAction, useLoginSubmit } from '@/hooks'
import { ProductFormData, ProductSchema } from '@/schema/product-schema'
import { useEffect } from 'react'
import { Product } from '@/type'

const ProductForm = ({ product }: { product?: Product }) => {
  const { isLoading, startLoading, stopLoading } = useLoadingAction()
  const form = useForm<ProductFormData>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      title: '',
      price: 0,
      categoryId: 0,
      description: '',
      images: ['']
    }
  })
  const categories = ['aaa', 'bbb', 'ccc']
  // const onSubmit = useLoginSubmit(startLoading, stopLoading)
  const onSubmit = () => console.log('first')
  useEffect(() => {
    if (product) {
      form.reset({
        title: product.title,
        price: product.price,
        description: product.description,
        categoryId: product.category.id,
        images: product.images
      })
    }
  }, [product, form.reset])
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

        <CustomSelectInput categories={categories} control={form.control} />

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
