import React from 'react'
import { Link21 } from 'iconsax-react'
import { IconProps } from './Icon.interface'
import { withStyles } from './Icon.styles'

const Component: React.FC<IconProps> = ({ Icon = Link21, className }) => {
  return <Icon className={className} />
}
/**
 * Atom UI component of Icon for general purpose
 */
export const IconItem = withStyles(Component)
