import React, { useEffect, useState } from 'react'
import { IconItem } from '../../atoms'
import { DrawerPortal } from '../Drawer/DrawerPortal'
import { IMoblieDrawer } from './MobileDrawer.interface'
import style from './mobileDrawer.module.scss'
import { Add } from '../../../../constants/icons.constants'

const Component: React.FC<IMoblieDrawer> = ({ onClose, isOpen, children, className = '' }) => {
  const showMenu = isOpen ? 'show' : 'hidden'
  const [showContent, setShowContent] = useState<boolean>(false)

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null
    if (isOpen) {
      setShowContent(true)
    } else {
      timer = setTimeout(() => {
        setShowContent(false)
      }, 200)
    }
    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [isOpen])

  return (
    <DrawerPortal>
      <div className={`${style['magneto-ui-mobile-drawer']} ${className}`}>
        <aside className={style[showMenu]}>
          <button title="cerrar modal" className={style['magneto-ui-close-button']} onClick={onClose}>
            <IconItem icon={Add} hover={false} />
          </button>
          {showContent && <div className={style['magneto-ui-container']}>{children}</div>}
        </aside>
        {isOpen && <span className={`${style['background-drawer']}`} onClick={onClose} />}
      </div>
    </DrawerPortal>
  )
}
/**
 * Molecule UI component for Mobile Drawer
 */
export const MobileDrawer = Component
