import { CustomDialog } from '@/components/common'
import ProductForm from '@/components/form/product-form'

const ViewProduct = ({
  open,
  onOpenChange
}: {
  open: boolean
  onOpenChange: () => void
}) => {
  return (
    <CustomDialog
      open={open}
      handleOpen={onOpenChange}
      title={`Create a new Product`}
    >
      <ProductForm onOpenChange={onOpenChange}/>
    </CustomDialog>
  )
}

export default ViewProduct
