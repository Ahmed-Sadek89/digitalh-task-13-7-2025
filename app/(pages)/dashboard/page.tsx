import { CustomTable } from '@/components/section'
import { getProducts } from '@/server/get-products'
import { Product } from '@/type'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'For DigitalH Task description'
}
const page = async () => {
  const products = await getProducts()
  return (
    <main className='flex justify-center items-center bg-black min-h-screen text-white'>
      <div className='mx-auto px-4 pt-32 pb-10 w-full max-w-8xl'>
        <CustomTable products={products as Product[]}/>
      </div>
    </main>
  )
}

export default page
