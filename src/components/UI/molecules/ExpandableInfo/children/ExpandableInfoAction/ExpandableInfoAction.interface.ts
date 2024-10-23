import { IconProps } from '@components/UI/atoms'

export interface IExpandableInfoActionProps {
  /**
   * Custom class name
   */
  className?: string
  /**
   * Loading state
   */
  loading?: boolean
  /**
   * Function or URL
   */
  onAction?: (() => void) | string
  /**
   * Left icon of the action
   */
  prefixIcon?: IconProps
  /**
   * Right icon of the action
   */
  suffixIcon?: IconProps
  /**
   * Action title
   */
  title?: string
  /**
   * Action variant
   */
  variant?: TExpandableInfoActionVariant
}

export type TExpandableInfoActionVariant = `${EExpandableInfoActionVariant}`

export enum EExpandableInfoActionVariant {
  DARK_BLUE = 'dark-blue',
  LIGHT_BLUE = 'light-blue',
  WHITE = 'white',
  GREEN = 'green'
}
