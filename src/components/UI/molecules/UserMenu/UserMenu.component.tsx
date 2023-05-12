import React, { useState } from 'react'
import { Popover } from '../../atoms/Popover'
import { ListMenuIcons } from '../ListMenuIcons'
import { IMenuUser } from './UserMenu.interface'

export const Component: React.FC<IMenuUser> = ({ listProps }) => {
  const [showPopover, setShowPopover] = useState(false)

  return (
    <Popover
      show={showPopover}
      content={<ListMenuIcons {...listProps} />}
      width={300}
      positionX="right"
      positionY="bottom"
    >
      <button onClick={() => setShowPopover(!showPopover)}>User Menu</button>
    </Popover>
  )
}

export const UserMenu = Component
