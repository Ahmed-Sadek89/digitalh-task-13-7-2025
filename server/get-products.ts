import axios from '@/lib/axios'
import { Product } from '@/type'

export async function getProducts (): Promise<Product[] | undefined> {
  const res = await axios.get('/products')
  return res.data
}
