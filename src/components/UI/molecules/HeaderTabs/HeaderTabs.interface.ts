import { IHeaderTab } from '../../atoms/'

export interface HeaderTabItem extends Omit<IHeaderTab, 'isActive'> {
  slug?: string
}

export interface IHeaderTabs {
  /**
   * Props for HeaderTab list
   */
  headerTabList: HeaderTabItem[]
  /**
   * Sets the URL Param for active tabs styling
   */
  urlParam: string
  /**
   * Sets a divider between HeaderTab items
   */
  addDivider?: boolean
}
