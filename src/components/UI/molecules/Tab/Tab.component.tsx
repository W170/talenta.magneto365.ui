import React from 'react'
import { TabButton } from '../TabButton'
import { ITab } from './Tab.interface'
import { withStyles } from './Tab.styles'

const Component: React.FC<ITab> = ({ tabButtonList = [], className }) => {
  return (
    <div className={className}>
      {tabButtonList?.map(({ ...tabButtonProps }, index: number) => (
        <TabButton key={index} {...tabButtonProps} />
      ))}
    </div>
  )
}

/**
 * Molecule UI for Tab
 */

export const Tab = withStyles(Component)
