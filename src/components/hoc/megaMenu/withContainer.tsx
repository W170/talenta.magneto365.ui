import { MegaMenuSideCards } from '@components/UI/molecules/MegaMenuSideCards'
import { IMegaMenuSideCards } from '@components/UI/molecules/MegaMenuSideCards/MegaMenuSideCards.interface'
import React from 'react'
import styles from './withContainer.module.scss'

const withMegaMenuContainer = <T,>(
  WrappedComponent: React.FC<T>
): React.FC<{ sideProps: IMegaMenuSideCards; wrapperProps: T }> => {
  const Component: React.FC<{ sideProps: IMegaMenuSideCards; wrapperProps: T }> = ({ sideProps, wrapperProps }) => {
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

  return Component
}

export default withMegaMenuContainer
