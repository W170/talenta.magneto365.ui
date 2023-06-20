import React from 'react'
import { IconItem } from '../Icon'
import { ILoading } from './Loading.interface'
import { withStyles } from './Loading.styles'

const Component: React.FC<ILoading> = ({ loadingIcon, className }) => {
  return (
    <div className={className}>
      <IconItem {...loadingIcon} />
    </div>
  )
}

/**
 * Atom UI component of loading icon for general purpose
 */

export const Loading = withStyles(Component)
