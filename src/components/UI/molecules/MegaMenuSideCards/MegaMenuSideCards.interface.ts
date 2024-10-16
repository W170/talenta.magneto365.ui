import { IMegaMenuLink } from '@components/UI/template/MegaMenu/MegaMenuContext.interface'
import { IMegaMenuCard } from '../MegaMenuCard'

export interface IMegaMenuSideCards {
  jobs: IMegaMenuCard[]
  onSelectCard?: (index: number) => void
  action?: IMegaMenuLink
}
