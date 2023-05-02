import React from 'react'
import { ITabButton } from './TabButton.interface'
import { withStyles } from './TabButton.styles'
import { Link } from '../../atoms/Link'

const Component: React.FC<ITabButton> = ({ link, text, className }) => {
  return (
    <div className={className}>
      <Link href={link} label={text} type="link" />
    </div>
  )
}

/**
 * Molecule UI component for Tab Button
 */

export const TabButton = withStyles(Component)
