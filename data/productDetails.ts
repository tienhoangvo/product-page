import { nanoid } from 'nanoid'
import Product from "../models/product";

const productDetails:Product = {
  id: nanoid(),
  title: 'Fall Limited Edition Sneakers',
  brand: 'Sneaker Company',
  description: `These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.`,
  price: 250.00,
  discount: .5,
  images: [
    {
      id: 0,
      thumbnail: "/images/image-product-1-thumbnail.jpg",
      large: "/images/image-product-1.jpg"
    },
    { 
      id: 1,
      thumbnail: "/images/image-product-2-thumbnail.jpg",
      large: "/images/image-product-2.jpg"
    },
    {
      id: 2,
      thumbnail: "/images/image-product-3-thumbnail.jpg",
      large: "/images/image-product-3.jpg"
    },
    {
      id: 3,
      thumbnail: "/images/image-product-4-thumbnail.jpg",
      large: "/images/image-product-4.jpg"
    }
  ]
}

export default productDetails