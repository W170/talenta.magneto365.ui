import React, { useEffect, useState } from 'react'
import { IPopover } from './Popover.interface'
import style from './popover.module.scss'

const Component: React.FC<IPopover> = ({
  children,
  content,
  positionX,
  positionY,
  show,
  widthBase,
  staticContent,
  className = ''
}) => {
  const showMenu = show ? 'show' : 'hidden'
  const staticContentClass = staticContent ? style['static-content'] : ''

  const [hideComponent, setHideComponent] = useState(false)

  useEffect(() => {
    if (show) {
      setHideComponent(true)
      return
    }
    const timer = setTimeout(() => {
      setHideComponent(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [show])

  return (
    <div
      style={{ width: widthBase }}
      className={[style['magneto-ui-popover-container'], staticContentClass, className].join(' ')}
    >
      <div className={`${style['magneto-ui-popover']} ${style[positionX]} ${style[positionY]} ${style[showMenu]}`}>
        {hideComponent && content}
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
