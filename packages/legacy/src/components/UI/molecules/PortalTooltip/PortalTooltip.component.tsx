import React from 'react'
import ReactDOM from 'react-dom'
import styles from './PortalTooltip.module.scss'
import usePortalTooltip from './hooks/usePortalTooltip.hook'
import { IPortalTooltipProps } from './PortalTooltip.interface'
import usePortalTooltipPosition from './hooks/usePortalTooltipPosition.hook'

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
  const { open, hideTooltip, showTooltip, tooltipContainer } = usePortalTooltip(visible, enterDelay, leaveDelay)
  const { coords, tooltipRef, triggerRef } = usePortalTooltipPosition(open, offset, position)

  return (
    <>
      <div
        ref={triggerRef}
        className={styles['portal-tooltip__trigger']}
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
          tooltipContainer
        )}
    </>
  )
}

export const PortalTooltip = Component
