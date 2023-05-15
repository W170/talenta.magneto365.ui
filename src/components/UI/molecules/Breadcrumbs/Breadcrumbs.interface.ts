import { IBreadcrumb } from '../../atoms/Breadcrumb/Breadcrumb.interface'
import { IconProps } from '../../atoms/Icon'

export interface BreadcrumbItem extends Omit<IBreadcrumb, 'isActive'> {
  slug: string
}

export interface IBreadcrumbs {
  /**
   * Props for the Icon
   */
  iconProps: IconProps
  /**
   * Sets the array that contains the breadcrumbs
   */
  breadcrumbsList: BreadcrumbItem[]
  /**
   * URL Param
   */
  urlParam: string
  className?: string
}
