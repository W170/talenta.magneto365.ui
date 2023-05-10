import { IBreadcrumb } from '../../atoms/Breadcrumb/Breadcrumb.interface'
import { IconProps } from '../../atoms/Icon'

export interface BreadcrumbItem extends Omit<IBreadcrumb, 'isActive'> {
  slug: string
}

export interface IBreadcrumbs {
  /**
   * Icon Props
   */
  IconProps: IconProps
  /**
   * Breadcrumbs props
   */
  breadcrumbItems: BreadcrumbItem[]
  /**
   * URL Param
   */
  urlParam: string
  className?: string
}
