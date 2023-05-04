import React from 'react'
import { Drawer } from '../../molecules/Drawer'
import { Tab } from '../../molecules/Tab/Tab.component'
import { IDrawerOrganism } from './DrawerOrganism.interface'
import { withStyles } from './DrawerOrganism.styles'
import { ListMenuItems } from '../../molecules/ListMenuItems'
import { ListIconLink } from '../../molecules/ListIconLink'

const Component: React.FC<IDrawerOrganism> = ({ className, tabButton, menuList, urlParam, listIcon }) => {
  return (
    <div className={className}>
      <Drawer direction="left" isOpen={true} onClose={() => ({})}>
        <Tab listButton={tabButton} />
        <ListMenuItems menuList={menuList} urlParam={urlParam} />
        <hr />
        <p>Botones Aqui</p>
        <hr />
        <ListIconLink listIcon={listIcon} />
      </Drawer>
    </div>
  )
}

export const DrawerOrganims = withStyles(Component)
