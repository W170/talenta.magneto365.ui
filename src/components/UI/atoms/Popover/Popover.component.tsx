import React, { useEffect, useState } from 'react'
import { IPopover } from './Popover.interface'
import styles from './popover.module.scss'

const Component: React.FC<IPopover> = ({
  children,
  content,
  positionX,
  positionY,
  show,
  widthBase,
  staticContent,
  className = '',
  style
}) => {
  const showMenu = show ? 'show' : 'hidden'
  const staticContentClass = staticContent ? styles['static-content'] : ''

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
      className={[styles['magneto-ui-popover-container'], staticContentClass, className].join(' ')}
    >
      <div className={`${styles['magneto-ui-popover']} ${styles[positionX]} ${styles[positionY]} ${styles[showMenu]}`}>
        {hideComponent && content}
      </div>

      <div style={style} className={styles['magneto-ui-popover-children']}>
        {children}
      </div>
    </div>
  )
}

/**
 * Atom Ui component of popover
 *
 */
export const Popover = Component
