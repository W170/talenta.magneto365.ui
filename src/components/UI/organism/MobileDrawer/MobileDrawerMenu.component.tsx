import React from 'react'
import { MobileDrawer } from '../../molecules/MobileDrawer'
import { ListMenuIcons } from '../../molecules/ListMenuIcons'
import { IMobileDrawerMenu } from './MobileDrawerMenu.interface'

const Component: React.FC<IMobileDrawerMenu> = ({ listProps, isOpen, onClose }) => {
  return (
    <MobileDrawer isOpen={isOpen} onClose={onClose}>
      <ListMenuIcons {...listProps} />
    </MobileDrawer>
  )
}

export const MobileDrawerMenu = Component
