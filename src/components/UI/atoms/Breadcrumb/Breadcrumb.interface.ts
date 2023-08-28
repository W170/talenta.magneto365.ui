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
}
