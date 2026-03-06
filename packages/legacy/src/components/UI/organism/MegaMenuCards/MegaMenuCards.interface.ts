import { IMegaMenuCard } from '@components/UI/molecules'
import { IMegaMenuLink } from '@components/UI/template/MegaMenu/MegaMenuContext.interface'
import { IAlphabetFilter } from '../AlphabetFilter/AlphabetFilter.interface'

export interface IMegaMenuCards {
  jobs: IMegaMenuCard[]
  filterProps?: IAlphabetFilter
  action?: IMegaMenuLink
  title?: string
  actionTitle?: IMegaMenuLink
  className?: string
  maxCards?: number
}
