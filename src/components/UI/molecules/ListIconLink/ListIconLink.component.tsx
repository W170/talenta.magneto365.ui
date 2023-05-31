import React from 'react'
import { IListIconLink, IListIcon } from './'
import { IconItem } from '../../atoms/Icon'

import { withStyles } from './ListIconLink.styles'

const Component: React.FC<IListIconLink> = ({ listIcon, size, color, className, hover = true }) => {
  return (
    <div className={className}>
      {listIcon?.map(({ Icon, url, assetsIcon }: IListIcon, index: number) => (
        <a key={index} href={url} target="_blank" rel="noopener noreferrer">
          <IconItem hover={hover} size={size} color={color} Icon={Icon} assetsIcon={assetsIcon} />
        </a>
      ))}
    </div>
  )
}

export const ListIconLink = withStyles(Component)
