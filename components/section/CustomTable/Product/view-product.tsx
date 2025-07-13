import { CustomDialog } from '@/components/common'
import { Product } from '@/type'
import Image from 'next/image'

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

  return (
    <CustomDialog
      open={open}
      handleOpen={onOpenChange}
      title={product.title}
      description={product.description}
    >
      <div className='space-y-2 text-sm'>
        <p>
          <strong>ID:</strong> {product.id}
        </p>
        <p>
          <strong>Slug:</strong> {product.slug}
        </p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <div className='flex items-center gap-3 mt-2'>
          <Image
            src={`${product.category.image}/png`}
            alt={product.category.name}
            width={50}
            height={50}
            className='rounded object-cover'
          />
          <span>{product.category.name}</span>
        </div>
        <div className='flex gap-2 mt-2'>
          {product.images.map((img, idx) => (
            <Image
              key={idx}
              src={`${img}/png`}
              alt={`Image ${idx + 1}`}
              width={60}
              height={60}
              className='rounded'
            />
          ))}
        </div>
      </div>
    </CustomDialog>
  )
}

export default ViewProduct