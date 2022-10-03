import type { ReactNode } from 'react'

import Header from '../Header'
import styles from './Layout.module.scss'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header/>
      {children}
    </div>
  )
}

export default Layout