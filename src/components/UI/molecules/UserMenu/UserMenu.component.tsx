import React from 'react'
import { Avatar, Popover } from '../../atoms'
import { ListMenuIcons } from '../ListMenuIcons'
import { IMenuUser } from './UserMenu.interface'
import withClickOut from '../../../hoc/withClickOut'

export const Component: React.FC<IMenuUser> = ({
  listMenuUserProps,
  profileImage,
  clickOut = false,
  setClickOut = () => ({})
}) => {
  return (
    <Popover
      widthBase={40}
      show={clickOut}
      content={<ListMenuIcons {...listMenuUserProps} />}
      width={300}
      positionX="left"
      positionY="bottom"
    >
      <Avatar {...profileImage} onClick={() => setClickOut(!clickOut)} />
    </Popover>
  )
}

export const UserMenu = withClickOut(Component)
