import React from 'react'
import { IconProps } from './Icon.interface'
import { withStyles } from './Icon.styles'

const Component: React.FC<IconProps> = ({ Icon, className, assetsIcon }) => {
  return <div className={className}>{Icon ? <Icon /> : <img className="magneto-ui-icon" src={assetsIcon} />}</div>
}
/**
 * Atom UI component of Icon for general purpose
 */
export const IconItem = withStyles(Component)
