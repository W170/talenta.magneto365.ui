export interface IconProps {
  /**
   * Here is the icon component
   */
  icon?: string | null
  /**
   * You can set the hover animation or disable
   */
  hover?: boolean
  /**
   * You can change the size of the icon by adding a numeric value here
   */
  size?: number
  /**
   * You can change the color of the icon by adding a hexadecimal value here
   */
  color?: string
  /**
   * Ypu can add you custom className here
   */
  className?: string
  /**
   * Text alt in the img element
   */
  alt?: string | null
}
