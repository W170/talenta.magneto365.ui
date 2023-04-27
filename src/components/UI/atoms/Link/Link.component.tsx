import React from 'react'
import { ILinkProps } from './Link.interface'
import { withStyles } from './Link.styles'

const Link: React.FC<ILinkProps> = ({ href, label, className }) => (
  <a className={className} href={href}>
    {label}
  </a>
)

export default withStyles(Link)
