'use client'
import CustomTableFooter from './custom-table-footer'
import CustomTableHeader from './custom-table-header'
import useTableStructure from '@/hooks/use-table-structure'
import CustomTableContent from './custom-table-content'

export default function CustomTable () {
  const { table } = useTableStructure()

  return (
    <div className='w-full'>
      <CustomTableHeader table={table} />
      <CustomTableContent table={table} />
      <CustomTableFooter table={table} />
    </div>
  )
}
