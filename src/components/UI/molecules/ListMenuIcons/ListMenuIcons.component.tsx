import React, { Fragment } from 'react'
import { Divider } from '../../atoms'
import { MenuIcon } from '../MenuIcon'

import { IListMenuIcons } from './ListMenuIcons.interface'
import { useMediaQuery } from '../../../hooks'
import style from './listMenuIcons.module.scss'
import { LogoutIcon, Setting2 } from '../../../../constants/icons.constants'

const Component: React.FC<IListMenuIcons> = ({ urlParam, menuItems, menuItems1440, logout, settings, haveGif }) => {
  const { logoutText, onClick } = logout
  const { settingsText, onClick: onClickSettings } = settings

  const userMenu = useMediaQuery(menuItems1440 && !haveGif ? menuItems1440 : menuItems, { xl: menuItems })

  return (
    <div className={style['mangeto-ui-list-menu-icons']}>
      <div>
        {userMenu?.map(({ title = '', items }, i: number) => (
          <div key={i}>
            <p>{title ? title : null}</p>
            {items.map(({ slug, icon, ...props }, i: number) => (
              <Fragment key={i}>
                <MenuIcon
                  icon={icon}
                  isActive={Array.isArray(slug) ? slug.includes(urlParam) : urlParam === slug}
                  {...props}
                />
              </Fragment>
            ))}
          </div>
        ))}
        <MenuIcon type="button" onClick={onClickSettings} icon={Setting2} text={settingsText} />
      </div>
      <Divider />
      <MenuIcon type="button" onClick={onClick} icon={LogoutIcon} text={logoutText} />
    </div>
  )
}

export const ListMenuIcons = Component
