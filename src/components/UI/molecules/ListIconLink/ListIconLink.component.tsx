import React from 'react'
import { IListIconLink } from './'
import { IconItem } from '../../atoms/Icon'
import { ListIconContainer } from './ListIconLink.styles'

const ListIconLink: React.FC<IListIconLink> = ({ listIcon, direction = 'row', spacing = 5, variant, size, color }) => {
  return (
    <ListIconContainer direction={direction} spacing={spacing}>
      {listIcon?.map(({ Icon, url }: IListIconLink, index: number) => (
        <a key={index} href={url} target="_blank" rel="noopener noreferrer">
          <IconItem variant={variant} size={size} color={color} Icon={Icon} />
        </a>
      ))}
    </ListIconContainer>
  )
}

export default ListIconLink
