import React from 'react'
import { TabButton } from '../TabButton'
import { ITab } from './Tab.interface'
import { withStyles } from './Tab.styles'

const Component: React.FC<ITab> = ({ leftButton, rightButton, className }) => {
  const { linkProps: leftLink } = leftButton
  const { linkProps: rightLink } = rightButton
  return (
    <div className={className}>
      <TabButton {...leftButton} linkProps={leftLink} />
      <TabButton {...rightButton} linkProps={rightLink} />
    </div>
  )
}

/**
 * Molecule UI for Tab
 */

export const Tab = withStyles(Component)
