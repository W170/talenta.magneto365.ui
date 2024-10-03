import { IMegaMenuCard } from '@components/UI/atoms'
import { IMegaMenuLink } from '@components/UI/template/MegaMenu/MegaMenuContext.interface'

export interface IMegaMenuCards {
  jobs: IMegaMenuCard[]
  action?: IMegaMenuLink
  title?: string
  actionTitle?: IMegaMenuLink
  className?: string
}
