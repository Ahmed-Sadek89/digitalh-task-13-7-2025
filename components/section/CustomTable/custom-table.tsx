'use client'
import CustomTableFooter from './custom-table-footer'
import CustomTableHeader from './custom-table-header'
import useTableStructure from '@/hooks/use-table-structure'
import CustomTableContent from './custom-table-content'
import { Product } from '@/type'
import { useProductStore } from '@/store/product-store'
import { useEffect } from 'react'

export default function CustomTable ({ products }: { products: Product[] }) {
  const { productStore, setProductStore } = useProductStore()

  useEffect(() => {
    if (productStore.length === 0) {
      setProductStore(products)
    }
  }, [products])

  const { table } = useTableStructure({
    data: productStore.length > 0 ? productStore : products
  })
  
  return (
    <div className='w-full'>
      <CustomTableHeader table={table} />
      <CustomTableContent table={table} />
      <CustomTableFooter table={table} />
    </div>
  )
}
