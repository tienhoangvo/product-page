import { createContext,  useContext } from 'react'
import type { ReactElement } from 'react'
import Product from '../models/product'

export const ProductDetailsContext = createContext<Product | undefined>(undefined)

export const useProductDetails = (): Product => {
  const context = useContext(ProductDetailsContext)

  if (typeof context === "undefined") {
    throw Error('useProductDetails must be used within ProductDetailsProvider')
  }

  return context
}

type ProductDetailsProviderProps = {
  product: Product,
  children: ReactElement
}

export const ProductDetailsProvider = ({ product, children }: ProductDetailsProviderProps) => {
  return (
    <ProductDetailsContext.Provider value={product}>
      {children}
    </ProductDetailsContext.Provider>
  )
}
