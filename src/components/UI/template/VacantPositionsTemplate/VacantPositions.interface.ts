import { IButtonLink } from '@components/UI/atoms'
import { IAlphabetFilter } from '@components/UI/organism/AlphabetFilter/AlphabetFilter.interface'

export interface IVacantPositions {
  title?: string
  subtitle?: string
  banner?: React.ReactNode
  filterProps?: IAlphabetFilter
  backButtonProps?: IButtonLink
  viewMoreProps?: IButtonLink
  children?: React.ReactNode
}
