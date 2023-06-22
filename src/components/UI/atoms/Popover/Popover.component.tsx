import React from 'react'
import { IPopover } from './Popover.interface'
import style from './popover.module.scss'

const Component: React.FC<IPopover> = ({ children, content, width, positionX, positionY, show }) => {
  const showMenu = show ? 'show' : 'hidden'

  return (
    <div className={style['magneto-ui-popover-container']}>
      <div
        style={{ width: width }}
        className={`${style['magneto-ui-popover']} ${style[positionX]} ${style[positionY]} ${style[showMenu]}`}
      >
        {content}
      </div>
      <div className={style['magneto-ui-popover-children']}>{children}</div>
    </div>
  )
}

/**
 * Atom Ui component of popover
 *
 */
export const Popover = Component
