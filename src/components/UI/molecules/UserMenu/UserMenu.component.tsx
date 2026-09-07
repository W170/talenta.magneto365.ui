import React from 'react'
import { Avatar, Popover } from '../../atoms'
import { ListMenuIcons } from '../ListMenuIcons'
import { IMenuUser } from './UserMenu.interface'
import withClickOut from '../../../hoc/withClickOut'
import useUserMenuNavigation from './hooks/useUserMenuNavigation.hook'

export const Component: React.FC<IMenuUser> = ({
  listMenuUserProps,
  profileImage,
  clickOut = false,
  setClickOut = () => ({}),
  renderHeader
}) => {
  const { menuId, triggerRef, menuRef, onMenuKeyDown } = useUserMenuNavigation({
    isOpen: clickOut,
    setIsOpen: setClickOut
  })

  return (
    <Popover
      widthBase={40}
      show={clickOut}
      content={
        <div id={menuId} role="menu" ref={menuRef} onKeyDown={onMenuKeyDown}>
          {renderHeader && renderHeader()}
          <ListMenuIcons {...listMenuUserProps} />
        </div>
      }
      positionX="left"
      positionY="bottom"
    >
      <Avatar
        ref={triggerRef}
        {...profileImage}
        onClick={() => setClickOut(!clickOut)}
        aria-haspopup="menu"
        aria-expanded={clickOut}
        aria-controls={menuId}
      />
    </Popover>
  )
}

export const UserMenu = withClickOut(Component)
