import { IBreadcrumb } from '../../atoms/Breadcrumb/Breadcrumb.interface'
import { IconProps } from '../../atoms/Icon'

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
