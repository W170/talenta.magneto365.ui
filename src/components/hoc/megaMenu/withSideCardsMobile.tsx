import React from 'react'
import { IMegaMenuSideCards, MegaMenuSideCards } from '@components/UI/molecules'
import styles from './withSideCards.module.scss'

const MobileSideCards = <T,>({
  WrappedComponent,
  sideProps,
  wrapperProps,
  showContent
}: {
  WrappedComponent: React.FC<T>
  sideProps: IMegaMenuSideCards
  wrapperProps: T
  showContent: boolean
}) => {
  return (
    <div className={styles['mega-menu-side-container']}>
      {showContent ? (
        <div className={styles['mega-menu-side-container__main']}>
          <WrappedComponent {...wrapperProps} />
        </div>
      ) : (
        <div className={styles['mega-menu-side-container__side']}>
          <MegaMenuSideCards {...sideProps} />
        </div>
      )}
    </div>
  )
}

export default MobileSideCards
