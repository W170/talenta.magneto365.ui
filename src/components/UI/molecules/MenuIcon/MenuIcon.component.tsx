import React from 'react'
import { IconItem } from '../../atoms/Icon'
import { IMenuIcon } from './MenuIcon.interface'
import { withStyles } from './MenuIcon.styles'

const Component: React.FC<IMenuIcon> = ({ text, Icon, className, url, type = 'link', onClick }) => {
  return (
    <>
      {type === 'link' ? (
        <a href={url} className={className}>
          <IconItem size={20} hover={false} Icon={Icon} />
          <p>{text}</p>
        </a>
      ) : (
        <button onClick={onClick} className={className}>
          <IconItem size={20} hover={false} Icon={Icon} />
          <p>{text}</p>
        </button>
      )}
    </>
  )
}

export const MenuIcon = withStyles(Component)
