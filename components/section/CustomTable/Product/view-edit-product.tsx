import { CustomDialog } from '@/components/common'
import ProductForm from '@/components/form/product-form'
import { Product } from '@/type'

const ViewProduct = ({
  open,
  onOpenChange,
  product
}: {
  open: boolean
  onOpenChange: () => void
  product: Product
}) => {
  if (!product) return null
  console.log({open})
  return (
    <CustomDialog
      open={open}
      handleOpen={onOpenChange}
      title={`Edit product number #${product.id}`}
    >
      <ProductForm product={product}/>
    </CustomDialog>
  )
}

export default ViewProduct