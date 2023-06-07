import React from 'react'
import { ITab } from './Tab.interface'
import { withStyles } from './Tab.styles'

const Component: React.FC<ITab> = ({ children, className }) => {
  return <div className={className}>{children}</div>
}

/**
 * Molecule UI for Tab
 */

export const Tab = withStyles(Component)
