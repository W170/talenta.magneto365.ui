import React from 'react'
import { IconItem } from '../../atoms/Icon'
import { IMenuIcon } from './MenuIcon.interface'
import { withStyles } from './MenuIcon.styles'

const Component: React.FC<IMenuIcon> = ({ text, Icon, className, url }) => {
  return (
    <a href={url} className={className}>
      <IconItem size={20} hover={false} Icon={Icon} />
      <p>{text}</p>
    </a>
  )
}

export const MenuIcon = withStyles(Component)
