import React, { useState } from 'react'
import { Drawer } from '../../molecules/Drawer'
import { ILoginTemplate } from './LoginTemplate.interface'
import { ListMenuItems } from '../../molecules/ListMenuItems'
import { ListIconLink } from '../../molecules/ListIconLink'
import { ListIcon, logoPropsLogin } from '../../../../constants/stories.constants'
import { LogoComponent } from '../../atoms/Logo'
import { LoginHeader } from '../../organism/LoginHeader'
import style from './loginTemplate.module.scss'

const Component: React.FC<ILoginTemplate> = ({ listMenuProps, homeUrl, ...props }) => {
  const [toggleDrawer, setToggleDrawer] = useState(false)

  return (
    <div className={style['magneto-ui-drawer-menu']}>
      <LoginHeader homeUrl={homeUrl} {...props} onClick={() => setToggleDrawer(true)} />
      <Drawer isOpen={toggleDrawer} onClose={() => setToggleDrawer(false)}>
        <a href={homeUrl}>
          <LogoComponent {...logoPropsLogin} />
        </a>

        <div className={style['menu-container']}>
          <ListMenuItems {...listMenuProps} />
        </div>
        <div className={style.actionsContainer}>
          <ListIconLink spacing={25} listIcon={ListIcon} />
        </div>
      </Drawer>
    </div>
  )
}

export const LoginTemplate = Component
