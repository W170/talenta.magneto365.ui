import { useMediaQuery } from '../../hooks'
import { MegaMenuSideCards } from '@components/UI/molecules/MegaMenuSideCards'
import { IMegaMenuSideCards } from '@components/UI/molecules/MegaMenuSideCards/MegaMenuSideCards.interface'
import React, { useCallback, useState } from 'react'
import styles from './withContainer.module.scss'
import { MegaMenuDrawerItem } from '@components/UI/atoms/MegaMenuDrawerItem/MegaMenuDrawerItem.component'

const { Drawer } = MegaMenuDrawerItem

const withMegaMenuContainer = <T,>(
  WrappedComponent: React.FC<T>
): React.FC<{ sideProps: IMegaMenuSideCards; wrapperProps: T }> => {
  const Component: React.FC<{ sideProps: IMegaMenuSideCards; wrapperProps: T }> = ({ sideProps, wrapperProps }) => {
    const [showDrawer, setShowDrawer] = useState(false)
    const [title, setTitle] = useState('')

    const toogleDrawer = useCallback(
      (index?: number) => {
        setShowDrawer(!showDrawer)
        setTitle(sideProps.jobs.at(index ?? 0)?.title ?? '')
      },
      [showDrawer, sideProps.jobs]
    )

    const renderCards = useMediaQuery(
      <>
        {
          <div className={styles['mega-menu-side-container__side']}>
            <MegaMenuSideCards {...sideProps} />
          </div>
        }
        <div className={styles['mega-menu-side-container__main']}>
          <WrappedComponent {...wrapperProps} />
        </div>
      </>,
      {
        md: <MegaMenuSideCards {...sideProps} onSelectCard={toogleDrawer} />
      }
    )

    return (
      <div className={styles['mega-menu-side-container']}>
        {renderCards}
        <Drawer
          isOpen={showDrawer}
          toggleDrawer={toogleDrawer}
          content={
            <div className={styles['mega-menu-side-container__main']}>
              <WrappedComponent {...wrapperProps} />
            </div>
          }
          title={title}
        />
      </div>
    )
  }

  return Component
}

export default withMegaMenuContainer
