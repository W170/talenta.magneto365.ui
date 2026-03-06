import { IMegaMenuSideCards, MegaMenuSideCards } from '@components/UI/molecules'
import React from 'react'
import styles from './withSideCards.module.scss'

const DesktopSideCards = <T,>({
  WrappedComponent,
  sideProps,
  wrapperProps
}: {
  WrappedComponent: React.FC<T>
  sideProps: IMegaMenuSideCards
  wrapperProps: T
}) => {
  return (
    <div className={styles['mega-menu-side-container']}>
      <div className={styles['mega-menu-side-container__side']}>
        <MegaMenuSideCards {...sideProps} />
      </div>
      <div className={styles['mega-menu-side-container__main']}>
        <WrappedComponent {...wrapperProps} />
      </div>
    </div>
  )
}

export default DesktopSideCards
