import Image from "next/image"
import Link from "next/link"
import clsx from 'clsx'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Link href="/">
          <a className={styles.navigationLink}>
            <Image src="/images/logo.svg" width="138" height="20" alt="Sneakers Logo"/>
          </a> 
        </Link>

        <Link href="/collections" >
          <a className={styles.navigationLink}>
            Collections
          </a>
        </Link>

        <Link href="/men">
          <a className={styles.navigationLink}>
            Men
          </a>
        </Link>

        <Link href="/women">
          <a className={styles.navigationLink}>
            Women
          </a>
        </Link>

        <Link href="/about">
          <a className={styles.navigationLink}>
            About
          </a>
        </Link>

        <Link href="/contact">
          <a className={styles.navigationLink}>
            Contact
          </a>
        </Link>
      </nav>

      <menu className={styles.menu}>
        <button className={clsx(styles.btn, styles.cartBtn)}>
          <Image src="/images/icon-cart.svg" width="20" height="20" alt="Sneakers Logo" className={styles.cartIcon}/>
        </button>
        <button className={clsx(styles.btn, styles.userBtn)}>
          <Image src="/images/image-avatar.png" width="36" height="36" alt="Sneakers Logo"/>
        </button>
      </menu>
    </header>
  )
}

export default Header