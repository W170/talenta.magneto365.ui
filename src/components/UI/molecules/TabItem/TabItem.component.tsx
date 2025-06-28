import React from 'react'
import styles from './TabItem.module.scss'
import { ITabItem } from './TabItem.interface'

const Component: React.FC<ITabItem> = ({ text, className = '', onClick, isDisabled, isSelected }) => {
  return (
    <button
      className={`${styles['magneto-ui-tab-item']} ${className}`}
      disabled={isDisabled}
      onClick={onClick}
      aria-selected={isSelected}
      aria-disabled={isDisabled}
      tabIndex={isDisabled ? -1 : 0}
      type="button"
      role="tab"
    >
      {text}
    </button>
  )
}

export const TabItem = Component
