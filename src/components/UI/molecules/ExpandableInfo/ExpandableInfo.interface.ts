import { IExpandableInfoActionProps, IExpandableInfoDetailsProps, IExpandableInfoMessageProps } from './children'
import { IconProps } from '@components/UI/atoms'

export interface IExpandableInfoProps {
  /**
   * Main action
   */
  actions?: IExpandableInfoActionProps[]
  /**
   * Details list
   */
  details?: IExpandableInfoDetailsProps
  /**
   * Floating component or not
   */
  floating?: boolean
  /**
   * Footer message
   */
  message?: IExpandableInfoMessageProps
  /**
   * Left icon of the dropdown
   */
  prefixIcon?: IconProps
  /**
   * Size of component
   */
  size?: TExpandableInfoSize
  /**
   * Right icon of the dropdown
   */
  suffixIcon?: IconProps
  /**
   * Main summary
   */
  summary?: string | number
  /**
   * Main title
   */
  title?: string
  /**
   * Type of component theme
   */
  variant?: TExpandableInfoVariant
}

export type TExpandableInfoVariant = `${EExpandableInfoVariant}`

export enum EExpandableInfoVariant {
  BLUE = 'blue',
  WHITE = 'white'
}

export type TExpandableInfoSize = `${EExpandableInfoSize}`

export enum EExpandableInfoSize {
  SMALL = 'small',
  LARGE = 'large'
}
