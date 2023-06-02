import React, { useRef } from 'react'
import { IPopover } from './Popover.interface'
import { withStyles } from './Popover.styles'

const Component: React.FC<IPopover> = ({ children, className, content, show }) => {
  const containerChildren = useRef<HTMLDivElement>(null)

  return (
    <div className={className}>
      {show && <div className="magneto-ui-popover">{content}</div>}
      <div ref={containerChildren} className="magneto-ui-popover-children">
        {children}
      </div>
    </div>
  )
}

/**
 * Atom Ui component of popover
 *
 */
export const Popover = withStyles(Component)
