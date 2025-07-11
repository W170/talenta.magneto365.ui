import React, { useEffect, useState } from 'react'
import { IconItem } from '../../atoms'
import { DrawerPortal } from './DrawerPortal'
import { IDrawer } from './Drawer.interface'
import style from './drawer.module.scss'
import { Add } from '../../../../constants/icons.constants'

const DEFAULT_PADDING = 20

const Component: React.FC<IDrawer> = ({
  className = '',
  isOpen,
  direction = 'left',
  isFull,
  customPadding,
  drawerWidth,
  isMobile,
  hideButton,
  children,
  onClose,
  blockBackgroundClose = false,
  customContainer,
  backGroundClassName = ''
}) => {
  const fullDrawer = isFull ? `full-drawer` : ''
  const paddingValue = customPadding !== undefined ? `${customPadding}px` : `${DEFAULT_PADDING}px`
  const backgroundEffect = isMobile ? 'no-background' : 'background-drawer'
  const widthValue = { '--drawer-width': drawerWidth }
  const [showContent, setShowContent] = useState<boolean>(false)
  const [renderPortal, setRenderPortal] = useState<boolean>(isOpen)
  const showDrawer = showContent ? `show-${direction}` : `hidden-${direction}`

  useEffect(() => {
    const { body } = document
    if (!body) return
    body.style.overflowY = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

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
        <DrawerPortal customContainer={customContainer}>
          <div className={`${style['magneto-ui-drawer']} ${style[fullDrawer]} ${className}`}>
            <aside className={`${style[showDrawer]}`} style={{ padding: paddingValue, ...widthValue }}>
              {!hideButton && (
                <button className={style['magneto-ui-close-button']} onClick={onClose}>
                  <IconItem icon={Add} hover={false} />
                </button>
              )}
              {children}
            </aside>
            {isOpen && (
              <span
                className={`${style[backgroundEffect]} ${backGroundClassName}`}
                onClick={blockBackgroundClose ? () => null : onClose}
              />
            )}
          </div>
        </DrawerPortal>
      )}
    </>
  )
}

/**
 * Molecule UI component for Drawer
 */

export const Drawer = Component
