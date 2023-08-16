import React, { Fragment, useMemo } from 'react'
import { Divider } from '../../atoms'
import { MenuIcon } from '../MenuIcon'

import { IListMenuIcons } from './ListMenuIcons.interface'
import { useMediaQuery } from '../../../hooks'
import style from './listMenuIcons.module.scss'
import { LoginCurve, Setting2 } from '../../../../constants/icons.constants'

const Component: React.FC<IListMenuIcons> = ({ urlParam, menuItems, menuItems1440, logout, settings, haveGif }) => {
  const { logoutText, onClick } = logout
  const { settingsText, onClick: onClickSettings } = settings

  const show1440Menu = useMemo(() => {
    return menuItems1440 && !haveGif
  }, [menuItems1440, haveGif])

  const menuResponsive = useMediaQuery(show1440Menu ? menuItems1440 : menuItems, { lg: menuItems })

  return (
    <div className={style['mangeto-ui-list-menu-icons']}>
      <div>
        {menuResponsive?.map(({ title = '', items }, i: number) => (
          <div key={i}>
            <p>{title ? title : null}</p>
            {items.map(({ slug, Icon, ...props }, i: number) => (
              <Fragment key={i}>
                <MenuIcon Icon={Icon} isActive={urlParam === slug ? true : false} {...props} />
              </Fragment>
            ))}
          </div>
        ))}
        <MenuIcon type="button" onClick={onClickSettings} Icon={Setting2} text={settingsText} />
      </div>
      <Divider />
      <MenuIcon type="button" onClick={onClick} Icon={LoginCurve} text={logoutText} />
    </div>
  )
}

export const ListMenuIcons = Component
