import React from 'react'
import { IMegaMenuContext } from './MegaMenuContext.interface'
import { MegaMenuCard } from '@components/UI/molecules'
import { MegaMenuCards } from '@components/UI/organism'
import { IMegaMenu } from './MegaMenu.interface'
import { withMegaMenuSideCards } from '@components/hoc'
import { useMediaQuery } from '@components/hooks'
import { MegaMenuDesktop } from './MegaMenuDesktop.component'
import { MegaMenuMobile } from './MegaMenuMobile.component'

const Component: React.FC<IMegaMenuContext & IMegaMenu> = (props) => {
  return useMediaQuery(<MegaMenuDesktop {...props} />, { md: <MegaMenuMobile {...props} /> })
}

export const MegaMenu = Object.assign(Component, {
  Cards: MegaMenuCards,
  Card: MegaMenuCard,
  SideCards: withMegaMenuSideCards(MegaMenuCards)
})
