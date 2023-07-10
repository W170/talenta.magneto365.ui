import React from 'react'
import { IListIconLink, IListIcon } from './'
import { IconItem } from '../../atoms/Icon'
import style from './listIconLink.module.scss'

const Component: React.FC<IListIconLink> = ({ listIcon, size, hover = true, spacing }) => {
  return (
    <div style={{ gap: `${spacing}px` }} className={style['magneto-ui-list-icon']}>
      {listIcon.map(({ Icon, url }: IListIcon, index: number) => (
        <a key={index} href={url} target="_blank" rel="noopener noreferrer">
          <IconItem hover={hover} size={size} Icon={Icon} />
        </a>
      ))}
    </div>
  )
}

export const ListIconLink = Component
