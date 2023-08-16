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
}

interface IMenuList {
  tag: string
  routePath: string
  baseUrl: string
  isExternal: boolean
}
