import React from 'react'
import { IPopover } from './Popover.interface'
import { withStyles } from './Popover.styles'

const Component: React.FC<IPopover> = ({ children, className, content }) => {
  return (
    <div className={className}>
      <div className="magneto-ui-popover">{content}</div>
      <div className="magneto-ui-popover-children">{children}</div>
    </div>
  )
}

/**
 * Atom Ui component of popover
 *
 */
export const Popover = withStyles(Component)
