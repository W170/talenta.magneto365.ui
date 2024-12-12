import { ICandidateOverviewSummaryProps, ICandidateOverviewSkillsProps, ICandidateOverviewTagsProps } from './children'
import { IconProps } from '@components/UI/atoms'

export interface ICandidateOverviewProps {
  /**
   * Data to render
   */
  data?: ICandidateOverviewData<ECandidateOverviewData>[]
  /**
   * Separation between components
   */
  separation?: TCandidateOverviewSeparation
}

export interface ICandidateOverviewData<T extends ECandidateOverviewData> {
  /**
   * Children to render
   */
  children?: TCandidateOverviewChildren<T>
  /**
   * Type of component
   */
  type: TCandidateOverviewData
}

export type TCandidateOverviewChildren<T extends ECandidateOverviewData> = T extends ECandidateOverviewData.SUMMARY
  ? ICandidateOverviewSummaryProps[]
  : T extends ECandidateOverviewData.TAGS
  ? ICandidateOverviewTagsProps[]
  : T extends ECandidateOverviewData.SKILLS
  ? ICandidateOverviewSkillsProps[]
  : T extends ECandidateOverviewData.CUSTOM
  ? React.FC<unknown> | React.ReactElement
  : never

export interface ICandidateOverviewBaseProps {
  /**
   * Separation between components
   */
  separation?: TCandidateOverviewSeparation
  /**
   * Title of component
   */
  title?: ICandidateOverviewText
}

export interface ICandidateOverviewText {
  /**
   * Color of text
   */
  color?: TCandidateOverviewFontColor
  /**
   * URL or function of text
   */
  data?: string | ((text: ICandidateOverviewText) => void)
  /**
   * Prefix icon of text
   */
  prefixIcon?: IconProps
  /**
   * Separation between text and icons
   */
  separation?: TCandidateOverviewSeparation
  /**
   * Size of text
   */
  size?: TCandidateOverviewFontSize
  /**
   * Suffix icon of text
   */
  suffixIcon?: IconProps
  /**
   * Text
   */
  value: string
  /**
   * Weight of text
   */
  weight?: TCandidateOverviewFontWeight
}

export interface ICandidateOverviewTextContainer {
  /**
   * Array of text
   */
  children?: ICandidateOverviewText[]
  /**
   * Direction of text
   */
  direction?: TCandidateOverviewTextDirection
  /**
   * Separation between text
   */
  separation?: TCandidateOverviewSeparation
}

export enum ECandidateOverviewSeparation {
  NONE = 'none',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  XXL = 'xxl',
  XXXL = 'xxxl'
}

export type TCandidateOverviewSeparation = `${ECandidateOverviewSeparation}`

export enum ECandidateOverviewTextDirection {
  ROW = 'row',
  COLUMN = 'column'
}

export type TCandidateOverviewTextDirection = `${ECandidateOverviewTextDirection}`

export enum ECandidateOverviewData {
  SUMMARY = 'summary',
  TAGS = 'tags',
  SKILLS = 'skills',
  CUSTOM = 'custom'
}

export type TCandidateOverviewData = `${ECandidateOverviewData}`

export enum ECandidateOverviewFontSize {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  XXL = 'xxl'
}

export type TCandidateOverviewFontSize = `${ECandidateOverviewFontSize}`

export enum ECandidateOverviewFontWeight {
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

export type TCandidateOverviewFontWeight = `${ECandidateOverviewFontWeight}`

export enum ECandidateOverviewFontColor {
  GRAY = 'gray',
  BLACK = 'black'
}

export type TCandidateOverviewFontColor = `${ECandidateOverviewFontColor}`
