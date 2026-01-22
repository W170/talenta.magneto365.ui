import { ReactNode } from 'react'

export type MegaMenuSocialHeaderVariant = 'default' | 'candidate'

export interface IMegaMenuSocialHeaderPromo {
  content: ReactNode
  linkText: string
  linkUrl: string
}

export interface IMegaMenuSocialHeaderProps {
  variant?: MegaMenuSocialHeaderVariant
  promo?: IMegaMenuSocialHeaderPromo
  tabsPrefix?: string
}
