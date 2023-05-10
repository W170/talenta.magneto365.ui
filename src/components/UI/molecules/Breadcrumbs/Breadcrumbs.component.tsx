import React from 'react'
import { IconItem } from '../../atoms/Icon'
import { Breadcrumb } from '../../atoms/Breadcrumb'
import { withStyles } from './Breadcrumbs.styles'
import { IBreadcrumbs } from './Breadcrumbs.interface'

const Component: React.FC<IBreadcrumbs> = ({ IconProps, breadcrumbItems = [], urlParam, className }) => {
  return (
    <div className={className}>
      <IconItem {...IconProps} />
      {breadcrumbItems.map(({ label, slug }, index: number) => (
        <React.Fragment key={index}>
          <span>/</span>
          <Breadcrumb label={label} isActive={urlParam === slug ? true : false} />
        </React.Fragment>
      ))}
    </div>
  )
}

/**
 * Molecule UI component for breadcrums information
 */

export const Breadcrumbs = withStyles(Component)
