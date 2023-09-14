export interface IBreadcrumb {
  /**
   * Sets breadcrumb text
   */
  breadcrumbText: string
  /**
   * set breadcrumb custom text
   */
  breadcrumbCustomText?: string
  /**
   * set url breadcrumb
   */
  baseUrl: string
  /**
   * add query in the url
   */
  queryParams?: string
  /**
   * you can set urls with haveRedirect in true
   */
  haveRedirect?: boolean
  /**
   * this text replace the last position in the bredcrumbs text if it exists
   */
  detailTitle?: string | null
}
