import React from 'react'
import { ITabButton } from './TabButton.interface'
import { withStyles } from './TabButton.styles'
import { Link } from '../../atoms'

const Component: React.FC<ITabButton> = ({ boxShadow = true, linkProps, className }) => {
  return (
    <div className={`${className} ${boxShadow ? 'box-shadow' : ''}`}>
      <Link {...linkProps} />
    </div>
  )
}

/**
 * Molecule UI component for Tab Button
 */

export const TabButton = withStyles(Component)
