import React from 'react'
import { ITab } from './Tab.interface'
import styles from './Tab.modules.scss'

const Component: React.FC<ITab> = ({ children }) => {
  return <div className={styles.TabComponent}>{children}</div>
}

/**
 * Molecule UI for Tab
 */

export const Tab = Component
