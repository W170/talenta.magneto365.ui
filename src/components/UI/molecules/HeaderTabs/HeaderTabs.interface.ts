import { IHeaderTab } from '../../atoms/HeaderTab'

export interface HeaderTabItem extends Omit<IHeaderTab, 'isActive'> {
  slug?: string
}

export interface IHeaderTabs {
  /**
   *
   */
  headerTabList: HeaderTabItem[]
  /**
   * URL Param
   */
  urlParam: string
  className?: string
}
