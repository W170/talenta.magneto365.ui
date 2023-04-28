import React from 'react'
import { ILinkProps } from './Link.interface'
import { withStyles } from './Link.styles'

const Component: React.FC<ILinkProps> = ({ href, label, className }) => (
  <a className={className} href={href}>
    {label}
  </a>
)

/**
 * Atomic UI component for Link
 */
export const Link = withStyles(Component)
