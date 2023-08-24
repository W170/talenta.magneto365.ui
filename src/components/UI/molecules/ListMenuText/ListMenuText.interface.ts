export interface IListMenuText {
  /**
   * add title to heading menu
   */
  title: string
  /**
   * you can add custom height for active animation
   */
  heightContent?: number
  /**
   * imenu list props
   */
  links: IMenuList[]
  /**
   * this function open the widget
   */
  createAccount?: () => void
  /**
   * this function show a loading
   */
  isLoading?: boolean
}

interface IMenuList {
  tag: string
  routePath: string
  baseUrl: string
  isExternal: boolean
  isCreateAccount?: boolean
}
