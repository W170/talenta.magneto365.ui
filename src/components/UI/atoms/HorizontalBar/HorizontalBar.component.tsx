import React from 'react'
import { IHorizontalBarProps } from './HorizontalBar.interfaces'
import styles from './HorizontalBar.module.scss'

const Component: React.FC<IHorizontalBarProps> = ({ value, maxPercentage = 10, classNames, text }) => {
  const percentage = (value / maxPercentage) * 100
  const isBarTooSmall = percentage < maxPercentage / 10

  return (
    <div className={`${styles['magneto-ui-horizontal-bar']} ${classNames?.bar}`}>
      <p className={`${styles['magneto-ui-horizontal-bar__bar-text']} ${classNames?.text}`}>{text}</p>
      <div className={`${styles['magneto-ui-horizontal-bar__container']} ${classNames?.container}`}>
        <div
          className={`${styles['magneto-ui-horizontal-bar__fill']} ${classNames?.fill}`}
          style={{
            width: `${percentage}%`
          }}
        >
          {!isBarTooSmall && (
            <div className={`${styles['magneto-ui-horizontal-bar__value']} ${classNames?.value}`}>{value}</div>
          )}
        </div>
      </div>
    </div>
  )
}

export const HorizontalBar = Component
