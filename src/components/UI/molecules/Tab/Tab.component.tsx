import React from 'react'
import { ITab } from './Tab.interface'
import styles from './Tab.modules.scss'
// import { withStyles } from './Tab.styles'

const Component: React.FC<ITab> = ({ children }) => {
  return <div className={styles.TabComponent}>{children}</div>
}

/**
 * Molecule UI for Tab
 */

export const Tab = Component
