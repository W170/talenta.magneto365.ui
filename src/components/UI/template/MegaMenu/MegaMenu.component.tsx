import React from 'react'
import { MegaMenuSocialHeader } from '@components/UI/organism/MegaMenuSocialHeader'
import { MegaMenuProvider } from './MegaMenu.context'
import { IMegaMenuContext } from './MegaMenuContext.interface'
import { MegaMenuMainHeader } from '@components/UI/organism/MegaMenuMainHeader/MegaMenuMainHeader.component'
import { MegaMenuSideCards } from '@components/UI/molecules/MegaMenuSideCards'
import { MegaMenuCard } from '@components/UI/atoms'
import { MegaMenuCards } from '@components/UI/molecules'
import styles from './MegaMenu.module.scss'

const Component: React.FC<IMegaMenuContext> = ({ ...props }) => {
  return (
    <MegaMenuProvider {...props}>
      <header className={styles['mega-menu']}>
        <MegaMenuSocialHeader />
        <MegaMenuMainHeader />
      </header>
    </MegaMenuProvider>
  )
}

export const MegaMenu = Object.assign(Component, {
  Cards: MegaMenuCards,
  Card: MegaMenuCard,
  SideCards: MegaMenuSideCards
})
