export interface IUserMenuButtonAnalystProps {
  /**
   * Class name of the button main container
   */
  className?: string
  /**
   * Company name
   */
  company: string
  /**
   * Function to execute on click event
   */
  onClick?: () => void
  /**
   * User name
   */
  user: string
}
