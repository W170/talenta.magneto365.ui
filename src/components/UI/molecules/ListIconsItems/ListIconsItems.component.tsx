import React from 'react'
import { IconItem } from '../../atoms/Icon'
import style from './ListIconsItems.module.scss'
import { IListIconItem, IListIconItems } from '@components/UI/molecules/ListIconsItems/ListIconsItems.interface'

const Component: React.FC<IListIconItems> = ({
  listIcon,
  size,
  spacing,
  className = '',
  containerTitle,
  containerIcon
}) => {
  return (
    <div
      style={{
        gap: `${spacing}px`
      }}
      className={`${style['magneto-ui-list-icon-item']} ${className}`}
    >
      <div className={`${style['magneto-ui-list-icon-item__title']}`}>
        <IconItem alt={containerTitle} hover={false} size={size} icon={containerIcon} />
        <p>{containerTitle}</p>
      </div>
      {listIcon.map(({ icon, title, info }: IListIconItem, index: number) => (
        <div key={index} className={`${style['magneto-ui-list-icon-item__container']}`}>
          <div className={`${style['magneto-ui-list-icon-item__title']}`}>
            <IconItem alt={title} hover={false} size={size} icon={icon} />
            <span>{title}</span>
          </div>
          <span>{info}</span>
        </div>
      ))}
    </div>
  )
}

export const ListIconItem = Component
