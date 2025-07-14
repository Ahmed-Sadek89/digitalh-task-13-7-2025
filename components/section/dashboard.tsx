import React from 'react'
import CustomTable from './CustomTable/custom-table'
import { Product } from '@/type'

const Dashboard = ({ products }: { products: Product[] | undefined }) => {
  return (
    <main className='flex justify-center items-center bg-black min-h-screen text-white'>
      <div className='mx-auto px-4 pt-32 pb-10 w-full max-w-8xl'>
        <CustomTable products={products as Product[]} />
      </div>
    </main>
  )
}

export default Dashboard
