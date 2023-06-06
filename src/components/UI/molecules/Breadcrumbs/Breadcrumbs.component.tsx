import React from 'react'
import { Breadcrumb, IconItem } from '../../atoms'
import { IBreadcrumbs } from './Breadcrumbs.interface'
import { withStyles } from './Breadcrumbs.styles'
import { iconPropsBreadCrumb } from '../../../../constants/stories.constants'

const Component: React.FC<IBreadcrumbs> = ({ breadcrumbText, className }) => {
  return (
    <div className={className}>
      <IconItem {...iconPropsBreadCrumb} />
      <Breadcrumb breadcrumbText={breadcrumbText} />
    </div>
  )
}

/**
 * Molecule UI component for breadcrums information
 */

export const Breadcrumbs = withStyles(Component)
