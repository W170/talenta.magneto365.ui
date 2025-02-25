import { IconProps } from '@components/UI/atoms'
import { IExpandableInfoProps } from '@components/UI/molecules'

export interface ICandidateContext {
  isOpen: boolean
  onChangeOpen: (isOpen: boolean) => void
}

export interface ICandidateProfile {
  /**
   * The value of the option.
   */
  data?: ICanidateProfileData
  details?: ICandidateProfileSection[]
  className?: string
  expandableInfoProps?: IExpandableInfoProps
  isOpen?: boolean
  onChangeOpen?: (isOpen: boolean) => void
}

export interface ICandidateProfileSection {
  title?: ICandidateProfileText
  type?: TCandidateProfileSectionTypes
  children: ICandidateProfileTextContainer[]
}

export interface ICanidateProfileData {
  name: string
  lastname: string
  last_updated: string
  img: string
  role: string
  score?: string
}

export enum ECandidateProfileSectionTypes {
  DETAILS = 'details',
  QUICK_ACCESS = 'quick_access'
}
export type TCandidateProfileSectionTypes = `${ECandidateProfileSectionTypes}`

export interface ICandidateProfileText {
  size?: TCandidateProfileTextFontSize
  weight?: TCandidateProfileTextFontWeight
  color?: TCandidateProfileTextFontColor
  value: string
  data?: string | ((text: ICandidateProfileText) => void)
  prefixIcon?: IconProps
}

export interface ICandidateProfileTextContainer {
  children?: ICandidateProfileText[]
}

export enum ECandidateProfileFontSize {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  XXL = 'xxl'
}

export type TCandidateProfileTextFontSize = `${ECandidateProfileFontSize}`

export enum ECandidateProfileTextFontWeight {
  THIN = 'thin',
  EXTRA_LIGHT = 'extraLight',
  LIGHT = 'light',
  NORMAL = 'normal',
  MEDIUM = 'medium',
  SEMI_BOLD = 'semiBold',
  BOLD = 'bold',
  EXTRA_BOLD = 'extraBold',
  BLACK = 'black'
}

export type TCandidateProfileTextFontWeight = `${ECandidateProfileTextFontWeight}`

export enum ECandidateProfileFontColor {
  GRAY = 'gray',
  BLACK = 'black',
  WHITE = 'white',
  GREEN = 'green',
  BLUE = 'blue'
}

export type TCandidateProfileTextFontColor = `${ECandidateProfileFontColor}`
