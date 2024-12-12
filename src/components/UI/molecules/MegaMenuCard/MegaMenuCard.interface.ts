export interface IMegaMenuCard {
  /**
   * This is the main title
   * */
  title: string
  /**
   * You can switch between logo and icon
   * */
  logo?: string
  /**
   * You can switch between logo and icon
   * */
  icon?: string
  /**
   * className for the card component
   * */
  className?: string
  /**
   * Amount of quotas
   * */
  quotas: number
  /**
   * href uri for redirect when user clicked
   * */
  href?: string
  /**
   * Target way to launch the new url
   * */
  target?: string
  /**
   * Onclick callback
   * */
  onClick?: () => void
  /**
   * Show arrow icon
   * */
  showRigthArrow?: boolean
}
