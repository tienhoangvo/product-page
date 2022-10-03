import clsx from "clsx"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import type ProductImage from "../../models/productImage"

import styles from './ImageGallery.module.scss'

type ImageGalleryProps = {
  images: ProductImage[],
  windowSize: number,
  thumbnailSize: number,
  thumbnailGap: number,
}

const ImageGallery = ({
  images,
  windowSize = 5,
  thumbnailSize = 100,
  thumbnailGap = 16,
}: ImageGalleryProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const [selected, setSelected] = useState<ProductImage['id']>(images[0].id)

  const selectedImage = images.find(image => image.id === selected) ?? images[0]

  const handleClick =(id: ProductImage['id']) => () => {
    setSelected(id)
  }

  const size = thumbnailSize * windowSize + thumbnailGap * (windowSize - 1)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    container.style.setProperty('--size', size + 'px')
    container.style.setProperty('--thumbnailSize', thumbnailSize + 'px')
    container.style.setProperty('--gap', thumbnailGap + 'px')

  }, [size, thumbnailSize, thumbnailGap])


  return (
    <div className={styles.imageGallery} ref={containerRef}>
      <div className={styles.previewImage}>
        <Image src={selectedImage?.large} alt={selectedImage?.thumbnail} height={size} width={size}/>
      </div>
      
      <ul className={styles.thumbnailList}>
        {
          images.map((image) => {
            return (
              <li key={image.id} onClick={handleClick(image.id)} data-id={image.id} className={image.id === selected ? clsx(styles.thumbnailListItem, styles.selectedItem) : styles.thumbnailListItem}>
                <Image  src={image.thumbnail} alt={image.thumbnail} height={thumbnailSize} width={thumbnailSize}/>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default ImageGallery