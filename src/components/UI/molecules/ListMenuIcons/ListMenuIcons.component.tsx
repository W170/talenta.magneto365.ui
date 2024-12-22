import React, { Fragment } from 'react'
import { Divider } from '../../atoms'
import { MenuIcon } from '../MenuIcon'

import { IListMenuIcons } from './ListMenuIcons.interface'
import { useMediaQuery } from '../../../hooks'
import style from './listMenuIcons.module.scss'
import { LogoutIcon } from '../../../../constants/icons.constants'
import { getIcons } from '@utils/icons/getIcons.util'

const Component: React.FC<IListMenuIcons> = ({ urlParam, menuItems, logout }) => {
  const { logoutText, onClick } = logout

  const userMenu = useMediaQuery(menuItems, { xl: menuItems })

  return (
    <div className={style['mangeto-ui-list-menu-icons']}>
      <div>
        {userMenu?.map(({ title = '', items }, i: number) => (
          <div key={i}>
            <p>{title ? title : null}</p>
            {items.map(({ slug, icon, ...props }, i: number) => (
              <Fragment key={i}>
                <MenuIcon
                  icon={getIcons(icon)}
                  isActive={Array.isArray(slug) ? slug.includes(urlParam) : urlParam === slug}
                  {...props}
                />
              </Fragment>
            ))}
            <Divider spacing={30} />
          </div>
        ))}
      </div>
      <MenuIcon type="button" onClick={onClick} icon={LogoutIcon} text={logoutText} />
    </div>
  )
}

export const ListMenuIcons = Component
