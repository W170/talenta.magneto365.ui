import { IAlphabetFilter } from '@components/UI/organism/AlphabetFilter/AlphabetFilter.interface'

export interface IVacantPositions {
  title?: string
  subtitle?: string
  banner?: React.ReactNode
  filterProps?: IAlphabetFilter
  showBackButton?: boolean
  viewMoreProps?: IViewMoreProps
  children?: React.ReactNode
}

export interface IViewMoreProps {
  buttonText: string
  href: string
  onClick: () => void
}
