import { IMegaMenuLink } from '@components/UI/template/MegaMenu/MegaMenuContext.interface'
import { IMegaMenuCard } from '../MegaMenuCard/MegaMenuCard.interface'

export interface IMegaMenuCards {
  jobs: IMegaMenuCard[]
  action?: IMegaMenuLink
  title?: string
  actionTitle?: IMegaMenuLink
  className?: string
}
