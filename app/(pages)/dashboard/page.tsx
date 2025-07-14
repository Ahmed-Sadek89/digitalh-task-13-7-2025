import { CustomTable } from '@/components/section'
import Dashboard from '@/components/section/dashboard'
import { getFilteredProducts } from '@/server/get-filtered-products'
import { getProducts } from '@/server/get-products'
import { Product } from '@/type'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'For DigitalH Task description'
}
const page = async ({
  searchParams
}: {
  searchParams: Promise<{ product: string | undefined }>
}) => {
  const product_slug = (await searchParams).product
  let products
  if (product_slug) {
    products = await getFilteredProducts(product_slug as string)
  } else {
    products = await getProducts()
  }
  return <Dashboard products={products} />
}

export default page
