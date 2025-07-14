import axios from '@/lib/axios'
import { Product } from '@/type'

export async function getFilteredProducts (
  product_slug: string
): Promise<Product[] | undefined> {
  try {
    const res = await axios.get(`/products/slug/${product_slug}`)
    if (res.status === 400) {
      return []
    }
    return [res.data]
  } catch (error) {
    return []
  }
}
