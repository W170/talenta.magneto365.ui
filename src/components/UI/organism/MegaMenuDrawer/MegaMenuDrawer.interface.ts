import { IMegaMenuSocialHeaderProps } from '../MegaMenuSocialHeader'

export interface IMegaMenuDrawer {
  className?: string
  isOpen?: boolean
  onClose?: () => void
  socialHeaderVariantProps?: IMegaMenuSocialHeaderProps
}
