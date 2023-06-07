import React from 'react'
import { ListMenuIcons, MobileDrawer } from '../../molecules'
import { IMobileDrawerMenu } from './MobileDrawerMenu.interface'

const Component: React.FC<IMobileDrawerMenu> = ({ listMenuUserProps, isOpen, onClose }) => {
  return (
    <MobileDrawer isOpen={isOpen} onClose={onClose}>
      <ListMenuIcons {...listMenuUserProps} />
    </MobileDrawer>
  )
}

export const MobileDrawerMenu = Component
