import { IBreadcrumbs } from '@components/UI/molecules'
import { IMegaMenuSocialHeaderProps } from '@components/UI/organism/MegaMenuSocialHeader'
import React from 'react'

export interface IMegaMenu {
  breadcrumbsProps?: IBreadcrumbs
  socialHeaderVariantProps?: IMegaMenuSocialHeaderProps
  renderHeaderUserMenu?: () => React.ReactNode
}
