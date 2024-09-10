import React from 'react'
import { MegaMenuSocialHeader } from '@components/UI/organism/MegaMenuSocialHeader'
import { MegaMenuProvider } from './MegaMenu.context'
import { IMegaMenuContext } from './MegaMenuContext.interface'
import { MegaMenuMainHeader } from '@components/UI/organism/MegaMenuMainHeader/MegaMenuMainHeader.component'
import { MegaMenuSideCards } from '@components/UI/molecules/MegaMenuSideCards'
import { MegaMenuCard } from '@components/UI/atoms'
import { Breadcrumbs, MegaMenuCards } from '@components/UI/molecules'
import styles from './MegaMenu.module.scss'
import { IMegaMenu } from './MegaMenu.interface'

const Component: React.FC<IMegaMenuContext & IMegaMenu> = ({ breadcrumbsProps, ...props }) => {
  return (
    <MegaMenuProvider {...props}>
      <header className={styles['mega-menu']}>
        <MegaMenuSocialHeader />
        <div className={styles['mega-menu__main-header']}>
          <MegaMenuMainHeader />
        </div>
        <div className={styles['mega-menu__breadcrumb']}>
          {breadcrumbsProps && <Breadcrumbs {...breadcrumbsProps} />}
        </div>
      </header>
    </MegaMenuProvider>
  )
}

export const MegaMenu = Object.assign(Component, {
  Cards: MegaMenuCards,
  Card: MegaMenuCard,
  SideCards: MegaMenuSideCards
})
