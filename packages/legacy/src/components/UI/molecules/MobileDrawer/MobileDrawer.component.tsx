import React, { useEffect, useState } from 'react'
import { IconItem } from '../../atoms'
import { DrawerPortal } from '../Drawer/DrawerPortal'
import { IMobileDrawer } from './MobileDrawer.interface'
import style from './mobileDrawer.module.scss'
import { Add } from '../../../../constants/icons.constants'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(style)

const Component: React.FC<IMobileDrawer> = ({
  onClose,
  isOpen,
  children,
  className = '',
  blockBackgroundClose = false,
  backgroundClassName = ''
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
          <div className={cx('magneto-ui-mobile-drawer')}>
            <aside className={cx(showMenu, className)}>
              <button
                data-name="close-drawer"
                title="close-modal"
                className={cx('magneto-ui-close-button')}
                onClick={onClose}
              >
                <IconItem icon={Add} hover={false} />
              </button>
              <div className={cx('magneto-ui-container')}>{children}</div>
            </aside>
            {isOpen && (
              <span
                className={cx('background-drawer', backgroundClassName)}
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
 * Molecule UI component for Mobile Drawer
 */
export const MobileDrawer = Component
