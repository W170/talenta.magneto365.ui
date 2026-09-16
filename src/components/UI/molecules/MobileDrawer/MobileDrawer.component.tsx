import React, { useEffect, useRef, useState } from 'react'
import { IconItem } from '../../atoms'
import { DrawerPortal } from '../Drawer/DrawerPortal'
import { useFocusTrap } from '@components/hooks/useFocusTrap'
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
  backgroundClassName = '',
  disableFocusTrap = false,
  ariaLabel,
  initialFocusRef,
  returnFocusRef
}) => {
  const [showContent, setShowContent] = useState<boolean>(false)
  const [renderPortal, setRenderPortal] = useState<boolean>(isOpen)
  const showMenu = showContent ? 'show' : 'hidden'
  const containerRef = useRef<HTMLElement>(null)

  useFocusTrap({
    active: isOpen && !disableFocusTrap,
    containerRef,
    onEscape: blockBackgroundClose ? undefined : onClose,
    initialFocusRef,
    returnFocusRef
  })

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
            <aside
              ref={containerRef}
              className={cx(showMenu, className)}
              role="dialog"
              aria-modal="true"
              aria-label={ariaLabel}
              tabIndex={-1}
            >
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
                aria-hidden="true"
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
