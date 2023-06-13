import React, { useState } from 'react'
import { Avatar, Popover } from '../../atoms'
import { ListMenuIcons } from '../ListMenuIcons'
import { IMenuUser } from './UserMenu.interface'
import { withStyles } from './UserMenu.styles'

export const Component: React.FC<IMenuUser> = ({ listMenuUserProps, className, profileImage }) => {
  const [showPopover, setShowPopover] = useState(false)

  return (
    <div className={className}>
      <Popover
        show={showPopover}
        content={<ListMenuIcons {...listMenuUserProps} />}
        width={300}
        positionX="left"
        positionY="bottom"
      >
        <Avatar {...profileImage} onClick={() => setShowPopover(!showPopover)} />
      </Popover>
      {showPopover && <span onMouseEnter={() => setShowPopover(false)} className="magneto-ui-bghover" />}
    </div>
  )
}

export const UserMenu = withStyles(Component)
