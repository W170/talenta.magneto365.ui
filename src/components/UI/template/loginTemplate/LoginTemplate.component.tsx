import React, { useContext, useMemo, useState } from 'react'
import { Drawer } from '../../molecules/Drawer'
import { MenuContainer, withStyles } from './LoginTemplate.styles'
import { ILoginTemplate } from './LoginTemplate.interface'
import { ListMenuItems } from '../../molecules/ListMenuItems'
import { ListIconLink } from '../../molecules/ListIconLink'
import { ListIcon, listMenuProps, listMenuUserProps, logoProps } from '../../../../constants/stories.constants'
import { ActiosContainer } from '../../organism/DrawerMenu/DrawerMenu.styles'
import { LogoComponent } from '../../atoms/Logo'
import { screenSize } from '../../../../constants/responsive.constants'
import { ResponsiveContext } from '../../../context/ResponsiveContext.component'
import { ListMenuIcons } from '../../molecules/ListMenuIcons'
import { MobileDrawer } from '../../molecules/MobileDrawer'
import { Popover } from '../../atoms/Popover'
//import { MobileDrawer } from '../../molecules/MobileDrawer'
//import { ListMenuIcons } from '../../molecules/ListMenuIcons'

const Component: React.FC<ILoginTemplate> = ({ className }) => {
  const [toggleDrawer, setToggleDrawer] = useState(false)
  const [toggleMobileDrawer, setToggleMobileDrawer] = useState(false)
  const [showPopover, setShowPopover] = useState(false)

  const { dim } = useContext(ResponsiveContext)

  const isMobile = useMemo(() => {
    return dim.size <= screenSize.md
  }, [dim.size])

  return (
    <div className={className}>
      <button onClick={() => setToggleDrawer(true)}>Burger Menu</button>

      {isMobile ? (
        <button onClick={() => setToggleMobileDrawer(true)}>Open Mobile Drawer</button>
      ) : (
        /**You must change positionX left instead right */
        <Popover
          show={showPopover}
          content={<ListMenuIcons {...listMenuUserProps} />}
          width={300}
          positionX="right"
          positionY="bottom"
        >
          <button onClick={() => setShowPopover(!showPopover)}>User Menu</button>
        </Popover>
      )}

      <Drawer direction="left" isOpen={toggleDrawer} onClose={() => setToggleDrawer(false)}>
        <LogoComponent isoView={isMobile} {...logoProps} />
        <MenuContainer>
          <ListMenuItems {...listMenuProps} />
        </MenuContainer>
        <ActiosContainer>
          <ListIconLink spacing={30} listIcon={ListIcon} />
        </ActiosContainer>
      </Drawer>
      <MobileDrawer isOpen={toggleMobileDrawer} onClose={() => setToggleMobileDrawer(false)}>
        <ListMenuIcons {...listMenuUserProps} />
      </MobileDrawer>
    </div>
  )
}

export const LoginTemplate = withStyles(Component)
