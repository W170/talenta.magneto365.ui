import React from 'react'
import { ITabButton } from './TabButton.interface'
import { withStyles } from './TabButton.styles'
import { Link } from '../../atoms'

const Component: React.FC<ITabButton> = ({ tabButtonLink, tabButtonStyle, className }) => {
  const { boxShadow } = tabButtonStyle || {}

  return (
    <div className={`${className} ${boxShadow ? 'box-shadow' : ''}`}>
      {tabButtonLink && <Link {...tabButtonLink} />}
    </div>
  )
}

/**
 * Molecule UI component for Tab Button
 */

export const TabButton = withStyles(Component)
