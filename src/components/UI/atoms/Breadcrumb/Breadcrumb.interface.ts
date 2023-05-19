export interface IBreadcrumb {
  /**
   * Sets breadcrumb text
   */
  breadcrumbText: string
  /**
   * Sets breadcrumb modifier for active label
   */
  isActive: boolean
  /**
   * Sets possible breadcrumb URL
   */
  url?: string
  className?: string
}
