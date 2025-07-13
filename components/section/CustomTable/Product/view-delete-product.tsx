import { CustomDialog } from '@/components/common'
import DeleteProductForm from '@/components/form/delete-product-form'
import { Product } from '@/type'

const ViewDeleteProduct = ({
  open,
  onOpenChange,
  product
}: {
  open: boolean
  onOpenChange: () => void
  product: Product
}) => {
  if (!product) return null

  return (
    <CustomDialog
      open={open}
      handleOpen={onOpenChange}
      title={`Are you sure?`}
      description={`You are going to delete product number #${product.id}`}
    >
      <DeleteProductForm handleOpen={onOpenChange} product={product} />
    </CustomDialog>
  )
}

export default ViewDeleteProduct
