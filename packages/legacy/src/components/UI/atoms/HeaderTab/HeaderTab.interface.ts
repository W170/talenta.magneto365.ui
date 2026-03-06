type TabOption = 'tabTitle' | 'tabOption'

export interface IHeaderTab {
  /**
   * Sets the type of tab
   */
  tabType: TabOption
  /**
   * Sets the url of tab
   */
  url?: string
  /**
   * Sets the text of tab
   */
  tabText: string
  /**
   * Sets the active state of tab
   */
  isActive: boolean
  /**
   * Sets custom className
   */
  className?: string
  /**
   * Sets badge count
   */
  count?: number
}
