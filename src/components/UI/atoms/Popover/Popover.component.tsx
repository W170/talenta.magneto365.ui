import React, { useEffect, useState } from 'react'
import { IPopover } from './Popover.interface'
import style from './popover.module.scss'

const Component: React.FC<IPopover> = ({ children, content, width, positionX, positionY, show, widthBase }) => {
  const showMenu = show ? 'show' : 'hidden'
  const [hideComponent, setHideComponent] = useState(false)

  useEffect(() => {
    if (show) {
      setHideComponent(true)
      return
    }
    setTimeout(() => {
      setHideComponent(false)
    }, 300)
  }, [show])

  return (
    <div style={{ width: widthBase }} className={style['magneto-ui-popover-container']}>
      {hideComponent && (
        <div
          style={{ width: width ? width : 'auto' }}
          className={`${style['magneto-ui-popover']} ${style[positionX]} ${style[positionY]} ${style[showMenu]}`}
        >
          {content}
        </div>
      )}

      <div className={style['magneto-ui-popover-children']}>{children}</div>
    </div>
  )
}

/**
 * Atom Ui component of popover
 *
 */
export const Popover = Component
