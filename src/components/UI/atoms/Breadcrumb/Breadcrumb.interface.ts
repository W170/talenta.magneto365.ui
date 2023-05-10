export interface IBreadcrumb {
  /**
   * Possible Breadcrumb navigation URL
   */
  url?: string
  /**
   * Sets breadcrumb text
   */
  breadcrumbText: string
  /**
   * Sets breadcrumb modifier for active label
   */
  isActive: boolean
  className?: string
}
