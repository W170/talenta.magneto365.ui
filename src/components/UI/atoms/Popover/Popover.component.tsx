import React, { useEffect, useState } from 'react'
import { IPopover } from './Popover.interface'
import { withStyles } from './Popover.styles'

const Component: React.FC<IPopover> = ({ children, className, content, show }) => {
  const [childrenWidth, setChildrenWidth] = useState(0)
  const [childrenHeight, setChildrenHeight] = useState(0)
  const containerChildren = React.createRef<HTMLDivElement>()

  useEffect(() => {
    const children = containerChildren.current?.firstChild as HTMLElement
    const widthChildren = children?.clientWidth + 4
    const heightChildren: number = children?.clientHeight + 4
    setChildrenHeight(heightChildren)
    setChildrenWidth(widthChildren)
  }, [containerChildren])

  return (
    <div style={{ width: childrenWidth, height: childrenHeight }} className={className}>
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
