import React from 'react'
import { MenuItem } from '../../atoms/MenuItem'
import { IListMenuItems } from './ListMenuItems.interface'

const ListMenuItems: React.FC<IListMenuItems> = ({ menuList = [], urlParam = '' }) => {
  return (
    <ul>
      {menuList.map(({ text, url, slug }, index: number) => (
        <MenuItem key={index} isActive={urlParam === slug ? true : false} url={url} text={text} />
      ))}
    </ul>
  )
}

export default ListMenuItems
