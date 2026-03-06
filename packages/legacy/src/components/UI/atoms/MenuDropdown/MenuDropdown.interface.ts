import { IconProps } from '@components/UI/atoms'

export interface IMenuDropdownProps {
  /**
   * Children of the dropdown list
   */
  children?: React.ReactNode
  /**
   * Class name of the dropdown main container
   */
  className?: string
  /**
   * Class name of the dropdown list
   */
  listClassName?: string
  /**
   * Function to execute on click event
   */
  onClick?: (opened: boolean) => void
  /**
   * Opened state
   */
  opened?: boolean
  /**
   * Left icon of the dropdown
   */
  prefixIcon?: IconProps
  /**
   * Right icon of the dropdown
   */
  suffixIcon?: IconProps
  /**
   * Title of the dropdown
   */
  title: string | React.ReactNode
}
