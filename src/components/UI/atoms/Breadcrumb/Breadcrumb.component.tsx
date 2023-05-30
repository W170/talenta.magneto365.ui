import React from 'react'
import { IBreadcrumb } from './Breadcrumb.interface'
import { withStyles } from './Breadcrumb.styles'

const Component: React.FC<IBreadcrumb> = ({ breadcrumbText, className }) => {
  return (
    <div className={className}>
      <p>{breadcrumbText}</p>
    </div>
  )
}

/**
 * Atom UI of breadcrumb
 */
export const Breadcrumb = withStyles(Component)
