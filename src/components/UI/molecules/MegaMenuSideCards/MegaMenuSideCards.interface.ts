import { IMegaMenuCard } from '@components/UI/molecules'
import { IMegaMenuLink } from '@components/UI/template/MegaMenu/MegaMenuContext.interface'

export interface IMegaMenuSideCards {
  jobs: IMegaMenuCard[]
  onSelectCard?: (index: number) => void
  action?: IMegaMenuLink
  maxCards?: number
}
