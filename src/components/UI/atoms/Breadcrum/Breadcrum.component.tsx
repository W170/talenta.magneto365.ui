import React from 'react'
import { IBreadcrum } from './Breadcrum.interface'
import { withStyles } from './Breadcrum.styles'

const Component: React.FC<IBreadcrum> = ({ className, url = '#', label }) => {
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
export const Breadcrum = withStyles(Component)
