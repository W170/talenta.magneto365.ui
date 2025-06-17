import ReactDOM from 'react-dom'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { IPortalTooltipProps } from './PortalTooltip.interface'
import styles from './PortalTooltip.module.scss'
import { ContainerContext } from '@components/context/container/container.context'

const Component: React.FC<IPortalTooltipProps> = ({
  children,
  title,
  position = 'bottom',
  enterDelay,
  leaveDelay,
  offset = 8,
  hasArrow = true,
  visible = true,
  width = 'fit-content'
}) => {
  const [open, setOpen] = useState(false)
  const [coords, setCoords] = useState({ top: 0, left: 0 })
  const triggerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { container } = useContext(ContainerContext)

  const showTooltip = () => {
    if (!visible) return
    timeoutRef.current && clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setOpen(true)
    }, enterDelay)
  }

  const hideTooltip = () => {
    if (!visible) return
    timeoutRef.current && clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setOpen(false)
    }, leaveDelay)
  }

  const updatePosition = useCallback(() => {
    if (!triggerRef.current || !tooltipRef.current) return

    const triggerRect = triggerRef.current.getBoundingClientRect()
    const tooltipRect = tooltipRef.current.getBoundingClientRect()

    const scrollY = window.scrollY
    const scrollX = window.scrollX

    let top = 0
    let left = 0

    switch (position) {
      case 'top':
        top = triggerRect.top + scrollY - tooltipRect.height - offset
        left = triggerRect.left + scrollX + triggerRect.width / 2 - tooltipRect.width / 2
        break
      case 'bottom':
        top = triggerRect.bottom + scrollY + offset
        left = triggerRect.left + scrollX + triggerRect.width / 2 - tooltipRect.width / 2
        break
      case 'left':
        top = triggerRect.top + scrollY + triggerRect.height / 2 - tooltipRect.height / 2
        left = triggerRect.left + scrollX - tooltipRect.width - offset
        break
      case 'right':
        top = triggerRect.top + scrollY + triggerRect.height / 2 - tooltipRect.height / 2
        left = triggerRect.right + scrollX + offset
        break
    }

    setCoords({ top, left })
  }, [position, offset])

  useEffect(() => {
    if (open) updatePosition()
  }, [open, updatePosition])

  useEffect(() => {
    const handleResize = () => open && updatePosition()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      timeoutRef.current && clearTimeout(timeoutRef.current)
    }
  }, [open, updatePosition])

  return (
    <>
      <div
        ref={triggerRef}
        style={{ width: 'fit-content' }}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        role="tooltip"
      >
        {children}
      </div>

      {open &&
        visible &&
        ReactDOM.createPortal(
          <div
            ref={tooltipRef}
            className={styles['portal-tooltip']}
            style={{
              top: `${coords.top}px`,
              left: `${coords.left}px`,
              width
            }}
          >
            <div className={styles['portal-tooltip__inner']}>
              {hasArrow && <div className={styles['portal-tooltip__inner-arrow']} data-position={position} />}
              {title}
            </div>
          </div>,
          container || document.body
        )}
    </>
  )
}

export const PortalTooltip = Component
