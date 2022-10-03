import type ProductImage from "./productImage"


type Product = {
  id: string,
  title: string,
  brand: string,
  description: string,
  price: number,
  discount: number,
  images: ProductImage[]
}

export default Product