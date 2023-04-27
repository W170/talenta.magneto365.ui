import React from 'react'
import { IListIconLink } from './'
import { IconItem } from '../../atoms/Icon'

import { withStyles } from './ListIconLink.styles'

const ListIconLink: React.FC<IListIconLink> = ({ listIcon, variant, size, color, className }) => {
  return (
    <div className={className}>
      {listIcon?.map(({ Icon, url }: IListIconLink, index: number) => (
        <a key={index} href={url} target="_blank" rel="noopener noreferrer">
          <IconItem variant={variant} size={size} color={color} Icon={Icon} />
        </a>
      ))}
    </div>
  )
}

export default withStyles(ListIconLink)
