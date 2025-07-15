'use client'
import CustomTableFooter from './custom-table-footer'
import CustomTableHeader from './custom-table-header'
import useTableStructure from '@/hooks/use-table-structure'
import CustomTableContent from './custom-table-content'
import { Product } from '@/type'
import { useProductStore } from '@/store/product-store'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function CustomTable ({ products }: { products: Product[] }) {
  const searchParams = useSearchParams()
  const product_param = searchParams.get('product')
  const { productStore, setProductStore } = useProductStore()

  useEffect(() => {
    if (product_param) {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(product_param.toLowerCase())
      )
      setProductStore(filtered)
    } else {
      setProductStore(products)
    }
  }, [products, product_param])

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
