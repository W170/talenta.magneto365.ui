import React from 'react'
import { IBreadcrumb } from './Breadcrumb.interface'
import { withStyles } from './Breadcrumb.styles'

const Component: React.FC<IBreadcrumb> = ({ className, url = '#', label }) => {
  return (
    <div className={className}>
      <a href={url}>
        <p>{label}</p>
      </a>
    </div>
  )
}

/**
 * Atom UI of breadcrum
 */
export const Breadcrumb = withStyles(Component)
