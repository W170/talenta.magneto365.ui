import React from 'react'
import { IListIconLink, IListIcon } from './'
import { IconItem } from '../../atoms/Icon'
import style from './listIconLink.module.scss'

const Component: React.FC<IListIconLink> = ({ listIcon, size, hover = true, spacing, className = '' }) => {
  return (
    <div style={{ gap: `${spacing}px` }} className={`${style['magneto-ui-list-icon']} ${className}`}>
      {listIcon.map(
        ({ icon, url, title }: IListIcon, index: number) =>
          url && (
            <a key={index} href={url} target="_blank" rel="noopener noreferrer">
              <IconItem alt={title} hover={hover} size={size} icon={icon} />
            </a>
          )
      )}
    </div>
  )
}

export const ListIconLink = Component
