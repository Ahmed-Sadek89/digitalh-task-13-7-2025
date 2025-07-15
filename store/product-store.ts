import { Product } from '@/type'
import { create } from 'zustand'

interface ProductStore {
  productStore: Product[]
  setProductStore: (products: Product[]) => void
}

export const useProductStore = create<ProductStore>(set => ({
  productStore: [],

  setProductStore: newProducts => set({ productStore: newProducts })
}))
