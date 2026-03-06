import React from 'react'
import styles from './Tooltip.module.scss'
import { ITooltipProps } from './Tooltip.interface'

const Tooltip: React.FC<ITooltipProps> = ({ title, position = 'top', children, width = '10rem', visible = true }) => {
  return (
    <div className={`${styles['tooltip-container']} ${styles[`tooltip-${position}`]}`}>
      <div className={`${styles['tooltip']} ${styles[`tooltip-${position}`]}`}>
        {children}
        {visible && (
          <span className={`${styles['tooltip-text']} ${styles[`tooltip-text-${position}`]}`} style={{ width }}>
            {title}
          </span>
        )}
      </div>
    </div>
  )
}

export default Tooltip
