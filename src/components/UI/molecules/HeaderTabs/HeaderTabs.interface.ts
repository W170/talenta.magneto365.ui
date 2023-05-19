import { IHeaderTab } from '../../atoms/HeaderTab'

export interface HeaderTabItem extends Omit<IHeaderTab, 'isActive'> {
  slug?: string
}

export interface IHeaderTabs {
  /**
   * Props for HeaderTab list
   */
  headerTabList: HeaderTabItem[]
  /**
   * URL Param
   */
  urlParam: string
  /**
   * Sets a divider between HeaderTab items
   */
  addDivider?: boolean
  className?: string
}
