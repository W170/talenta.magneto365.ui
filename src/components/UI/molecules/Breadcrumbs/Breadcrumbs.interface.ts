import { IBreadcrumb } from '../../atoms'
import { IconProps } from '../../atoms'

export interface BreadcrumbItem extends Omit<IBreadcrumb, 'isActive'> {
  slug: string
}

export interface IBreadcrumbs {
  /**
   * Sets the url param for the current page
   */
  urlParam: string
  /**
   * Sets the array that contains the breadcrumbs
   */
  breadcrumbsList: BreadcrumbItem[]
  /**
   * Props for the Icon
   */
  iconProps: IconProps
  className?: string
}
