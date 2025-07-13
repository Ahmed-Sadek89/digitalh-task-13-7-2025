export interface Product {
  id: number
  title: string
  slug: string
  description: string
  price: number
  category: {
    id: number
    name: string
    image: string
    slug: string
  }
  images: string[]
}
