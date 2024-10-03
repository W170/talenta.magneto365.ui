import { IMegaMenuCard } from '@components/UI/atoms'
import { IMegaMenuLink } from '@components/UI/template/MegaMenu/MegaMenuContext.interface'

export interface IMegaMenuSideCards {
  jobs: IMegaMenuCard[]
  onSelectCard?: (index: number) => void
  action?: IMegaMenuLink
}
