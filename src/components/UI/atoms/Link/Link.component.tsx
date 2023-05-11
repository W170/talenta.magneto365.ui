import React from 'react'
import { ILinkProps } from './Link.interface'
import { withStyles } from './Link.styles'
import { IconItem } from '../Icon'

const Component: React.FC<ILinkProps> = ({ href, text, iconProps, className }) => (
  <a className={className} href={href}>
    {iconProps && <IconItem {...iconProps} />}
    <p>{text}</p>
  </a>
)

/**
 * Atomic UI component for Link
 */
export const Link = withStyles(Component)
