import React, { useMemo, useRef } from 'react'
import { IPopover } from './Popover.interface'
import { withStyles } from './Popover.styles'

const Component: React.FC<IPopover> = ({ children, className, content, show }) => {
  const containerChildren = useRef<HTMLDivElement>(null)

  const calculateChildrenDimensions = useMemo(() => {
    return (): { widthChild: number; heightChild: number } => {
      const children = containerChildren.current?.firstChild as HTMLElement
      const widthChildren: number = children?.clientWidth + 4
      const heightChildren: number = children?.clientHeight + 4
      return { widthChild: widthChildren, heightChild: heightChildren }
    }
  }, [containerChildren])

  const { heightChild, widthChild } = calculateChildrenDimensions()

  return (
    <div
      style={{ width: isNaN(widthChild) ? '40px' : widthChild, height: isNaN(heightChild) ? '40px' : heightChild }}
      className={className}
    >
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
