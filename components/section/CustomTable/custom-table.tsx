'use client'
import CustomTableFooter from './custom-table-footer'
import CustomTableHeader from './custom-table-header'
import useTableStructure from '@/hooks/use-table-structure'
import CustomTableContent from './custom-table-content'
import { Product } from '@/type'

export default function CustomTable ({ products }: { products: Product[] }) {
  if (products && products.length > 0) {
    const { table } = useTableStructure({ data: products })

    return (
      <div className='w-full'>
        <CustomTableHeader table={table} />
        <CustomTableContent table={table} />
        <CustomTableFooter table={table} />
      </div>
    )
  }
}
