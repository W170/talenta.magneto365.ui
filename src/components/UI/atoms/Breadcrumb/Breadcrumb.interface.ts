export interface IBreadcrumb {
  /**
   * Breadcrumb label text
   */
  label: string
  /**
   * Possible Breadcrumb navigation URL
   */
  url?: string
  /**
   * Breadcrumb modifier for active label
   */
  isActive: boolean
  className?: string
}
