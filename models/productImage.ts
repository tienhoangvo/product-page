type ProductImage = {
  id: number,
  large: string,
  thumbnail: string
}

type ProductKeys = keyof ProductImage

export type UpdateProductAttributes = {
  [value in ProductKeys]?: ProductImage[value]
}

export default ProductImage