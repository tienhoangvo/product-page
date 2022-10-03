import Image from "next/image"
import type Product from "../../models/product"
import ImageGallery from "../ImageGallery"
import styles from './ProductDetailsCard.module.scss'

type ProductDetailsCardProps = {
  product: Product,
}

const ProductDetailsCard = ({ product }: ProductDetailsCardProps) => {
  return (
    <article className={styles.productDetailsCard}>
      <div className={styles.productInfo}>
        <header>
          <p className={styles.brand}>{product.brand}</p>
          <h1 className={styles.title}>{product.title}</h1>
        </header>

        <p className={styles.description}>{product.description}</p>

        <div className={styles.priceInfo}>
          <p className={styles.priceAfterDiscount}>
            <strong className={styles.price}>${product.price * product.discount}</strong>
            <span className={styles.discount}>{product.discount * 100}%</span>
          </p>
          <del className={styles.originalPrice}>${product.price}</del>
        </div>
        <menu className={styles.actions}>
          <div className={styles.cartQuantityBtns}>
            <button className={styles.decreaseBtn}>-</button>
            0
            <button className={styles.increaseBtn}>+</button>
          </div>

          <button className={styles.addToCartBtn}>
            <span>
              🛒
            </span>
            <span>Add to cart</span>
          </button>
        </menu>
      </div>

      
      <ImageGallery images={product.images} windowSize={4} thumbnailSize={100} thumbnailGap={16} />
      
    </article>
  )
}

export default ProductDetailsCard