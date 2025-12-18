import { IMegaMenuSideCards, MegaMenuSideCards } from '@components/UI/molecules'
import React, { useCallback, useState } from 'react'
import styles from './withSideCards.module.scss'
import { MegaMenuDrawerItem } from '@components/UI/molecules'

const MobileSideCardsDrawer = <T,>({
  WrappedComponent,
  sideProps,
  wrapperProps
}: {
  WrappedComponent: React.FC<T>
  sideProps: IMegaMenuSideCards
  wrapperProps: T
}) => {
  const [showDrawer, setShowDrawer] = useState(false)
  const [title, setTitle] = useState('')

  const updateDrawerContent = useCallback(
    (index) => {
      if (sideProps.onSelectCard) sideProps.onSelectCard(index)
      setTitle(sideProps.jobs.at(index)?.title ?? '')
    },
    [sideProps]
  )

  const toogleDrawer = useCallback(() => setShowDrawer(!showDrawer), [showDrawer])

  const onSelectSideCard = useCallback(
    (index) => {
      updateDrawerContent(index)
      toogleDrawer()
    },
    [toogleDrawer, updateDrawerContent]
  )

  return (
    <div className={styles['mega-menu-side-container']}>
      <MegaMenuSideCards {...sideProps} onSelectCard={onSelectSideCard} />
      <MegaMenuDrawerItem.Drawer
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

export default MobileSideCardsDrawer
