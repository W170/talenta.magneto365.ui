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
        sideProps.onSelectCard && sideProps.onSelectCard(index ?? 0)
        setTitle(sideProps.jobs.at(index ?? 0)?.title ?? '')
        setShowDrawer(!showDrawer)
      },
      [showDrawer, sideProps]
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
        md: (
          <>
            <MegaMenuSideCards
              {...sideProps}
              onSelectCard={(index) => {
                sideProps.onSelectCard && sideProps.onSelectCard(index)
                toogleDrawer(index)
              }}
            />
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
          </>
        )
      }
    )

    return <div className={styles['mega-menu-side-container']}>{renderCards}</div>
  }

  return Component
}

export default withMegaMenuContainer
