import ReactDOM from 'react-dom'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { IPortalTooltipProps } from './PortalTooltip.interface'
import styles from './PortalTooltip.module.scss'

const Component: React.FC<IPortalTooltipProps> = ({
  children,
  title,
  position,
  enterDelay,
  leaveDelay,
  offset = 8
}) => {
  const [visible, setVisible] = useState(false)
  const [coords, setCoords] = useState({ top: 0, left: 0 })
  const triggerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const showTooltip = () => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setVisible(true)
    }, enterDelay)
  }

  const hideTooltip = () => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setVisible(false)
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
    if (visible) updatePosition()
  }, [visible, updatePosition])

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        role="tooltip"
      >
        {children}
      </div>

      {visible &&
        ReactDOM.createPortal(
          <div
            ref={tooltipRef}
            className={styles['portal-tooltip']}
            style={{
              top: `${coords.top}px`,
              left: `${coords.left}px`
            }}
          >
            <div className={styles['portal-tooltip__inner']}>
              <div className={styles['portal-tooltip__inner-arrow']} data-position={position} />
              {title}
            </div>
          </div>,
          document.body
        )}
    </>
  )
}

export const PortalTooltip = Component
