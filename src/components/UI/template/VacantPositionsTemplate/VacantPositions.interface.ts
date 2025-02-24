import { IButtonLink } from '@components/UI/atoms'
import { IAlphabetFilter } from '@components/UI/organism/AlphabetFilter/AlphabetFilter.interface'

export interface IVacantPositions {
  /**
   * This is the title H1
   * */
  title?: string
  /**
   * This is the title H2
   * */
  subtitle?: string
  /**
   * Banner to render dynamically
   * */
  banner?: React.ReactNode
  /**
   * Props used by the AlphabetFilter component
   * */
  filterProps?: IAlphabetFilter
  /**
   * Props used by the back button
   * */
  backButtonProps?: IButtonLink
  /**
   * Props used by the view more button
   * */
  viewMoreProps?: IButtonLink
  /**
   * component that can be received dynamically as a children
   * */
  children?: React.ReactNode
}
