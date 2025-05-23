import React from 'react'
import styles from './TabItem.module.scss'
import { ITabItem } from './TabItem.interface'

const Component: React.FC<ITabItem> = ({ text, className = '', onClick, isDisabled, isSelected }) => {
  return (
    <button
      className={`${styles['magneto-ui-tab-item']} ${className}
        ${isDisabled ? styles['magneto-ui-tab-item--disabled'] : ''}
        ${isSelected ? styles['magneto-ui-tab-item--selected'] : ''}
      `}
      disabled={isDisabled}
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  )
}

export const TabItem = Component
