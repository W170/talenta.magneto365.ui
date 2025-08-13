import React from 'react'
import { IHorizontalBarProps } from './HorizontalBar.interfaces'
import styles from './HorizontalBar.module.scss'
import { getContrastColor } from '@utils/colors/getContrastColor'

const Component: React.FC<IHorizontalBarProps> = ({ value, maxPercentage = 10, color, className, text }) => {
  const percentage = (value / maxPercentage) * 100
  const isBarTooSmall = percentage < maxPercentage / 10
  const textColor = getContrastColor(color)

  return (
    <div className={`${styles['magneto-ui-horizontal-bar']} ${className}`}>
      <p className={styles['magneto-ui-horizontal-bar__bar-text']}>{text}</p>
      <div className={styles['magneto-ui-horizontal-bar__container']}>
        <div
          className={styles['magneto-ui-horizontal-bar__fill']}
          style={{
            width: `${percentage}%`,
            backgroundColor: color
          }}
        >
          {!isBarTooSmall && (
            <div
              className={styles['magneto-ui-horizontal-bar__value']}
              style={{
                color: textColor
              }}
            >
              {value}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export const HorizontalBar = Component
