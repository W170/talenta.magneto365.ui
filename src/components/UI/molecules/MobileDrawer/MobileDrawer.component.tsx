import React, { useEffect, useState } from 'react'
import { IconItem } from '../../atoms'
import { DrawerPortal } from '../Drawer/DrawerPortal'
import { IMoblieDrawer } from './MobileDrawer.interface'
import style from './mobileDrawer.module.scss'
import { Add } from '../../../../constants/icons.constants'

const Component: React.FC<IMoblieDrawer> = ({
  onClose,
  isOpen,
  children,
  className = '',
  blockBackgroundClose = false
}) => {
  const [showContent, setShowContent] = useState<boolean>(false)
  const [renderPortal, setRenderPortal] = useState<boolean>(isOpen)
  const showMenu = showContent ? 'show' : 'hidden'

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null
    if (isOpen) {
      setRenderPortal(true)
      timer = setTimeout(() => {
        setShowContent(true)
      }, 100)
    } else {
      setShowContent(false)
      timer = setTimeout(() => {
        setRenderPortal(false)
      }, 500)
    }
    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [isOpen])

  return (
    <>
      {renderPortal && (
        <DrawerPortal>
          <div className={`${style['magneto-ui-mobile-drawer']} ${className}`}>
            <aside className={style[showMenu]}>
              <button title="cerrar modal" className={style['magneto-ui-close-button']} onClick={onClose}>
                <IconItem icon={Add} hover={false} />
              </button>
              <div className={style['magneto-ui-container']}>{children}</div>
            </aside>
            {isOpen && (
              <span className={`${style['background-drawer']}`} onClick={blockBackgroundClose ? () => null : onClose} />
            )}
          </div>
        </DrawerPortal>
      )}
    </>
  )
}
/**
 * Molecule UI component for Mobile Drawer
 */
export const MobileDrawer = Component
