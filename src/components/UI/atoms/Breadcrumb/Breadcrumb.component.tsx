import React from 'react'
import { IBreadcrumb } from './Breadcrumb.interface'
import { withStyles } from './Breadcrumb.styles'

const Component: React.FC<IBreadcrumb> = ({ breadcrumbText, url, className }) => {
  return (
    <div className={className}>
      <a href={url}>
        <p>{breadcrumbText}</p>
      </a>
    </div>
  )
}

/**
 * Atom UI of breadcrumb
 */
export const Breadcrumb = withStyles(Component)
