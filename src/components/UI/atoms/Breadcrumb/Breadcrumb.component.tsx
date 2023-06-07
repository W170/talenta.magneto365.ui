import React from 'react'
import { IBreadcrumb } from './Breadcrumb.interface'
import { withStyles } from './Breadcrumb.styles'

const Component: React.FC<IBreadcrumb> = ({ breadcrumbText, className }) => {
  const breadcrumbSplit = breadcrumbText.split('/')
  return (
    <div className={className}>
      {breadcrumbSplit.map((bc, i) => (
        <p key={i}>
          {i > 0 && '/'} {breadcrumbSplit.length > i + 1 && bc}
        </p>
      ))}
      <p className="magneto-ui-bc-active">{breadcrumbSplit[breadcrumbSplit.length - 1]}</p>
    </div>
  )
}

/**
 * Atom UI of breadcrumb
 */
export const Breadcrumb = withStyles(Component)
