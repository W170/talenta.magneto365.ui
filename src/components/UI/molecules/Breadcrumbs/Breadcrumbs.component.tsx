import React from 'react'
import { IconItem } from '../../atoms/Icon'
import { Breadcrumb } from '../../atoms/Breadcrumb'
import { withStyles } from './Breadcrumbs.styles'
import { IBreadcrumbs } from './Breadcrumbs.interface'

const Component: React.FC<IBreadcrumbs> = ({ urlParam, breadcrumbsList = [], iconProps, className }) => {
  return (
    <div className={className}>
      <IconItem {...iconProps} />
      {breadcrumbsList.map(({ ...breadcrumbProps }, index: number) => (
        <React.Fragment key={index}>
          <span>/</span>
          <Breadcrumb isActive={urlParam === breadcrumbProps.slug ? true : false} {...breadcrumbProps} />
        </React.Fragment>
      ))}
    </div>
  )
}

/**
 * Molecule UI component for breadcrums information
 */

export const Breadcrumbs = withStyles(Component)
