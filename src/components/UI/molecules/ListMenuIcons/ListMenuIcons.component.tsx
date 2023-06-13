import React, { Fragment, useContext, useMemo } from 'react'
import { Divider } from '../../atoms'
import { MenuIcon } from '../MenuIcon'
import { screenSize } from '../../../../constants/responsive.constants'
import { ResponsiveContext } from '../../../context/ResponsiveContext.component'
import { LogoutCurve, Setting2 } from 'iconsax-react'
import { withStyles } from './ListMenuIcons.styles'
import { IListMenuIcons } from './ListMenuIcons.interface'
import { useMediaQuery } from '../../../hooks'

const Component: React.FC<IListMenuIcons> = ({ urlParam, menuItems, className, menuItems1440, logout, settings }) => {
  const { dim } = useContext(ResponsiveContext)
  const { logoutText, onClick } = logout
  const { settingsText, onClick: onClickSettings } = settings

  const menuResponsive = useMediaQuery(menuItems1440, { lg: menuItems })

  const isMobile = useMemo(() => {
    return dim.size <= screenSize.md
  }, [dim.size])

  return (
    <div className={className}>
      <div>
        {menuResponsive?.map(({ title = '', items }, i: number) => (
          <div key={i}>
            <p>{title ? title : null}</p>
            {items.map(({ slug, ...props }, i: number) => (
              <Fragment key={i}>
                <MenuIcon isActive={urlParam === slug ? true : false} {...props} />
              </Fragment>
            ))}
          </div>
        ))}
        <MenuIcon type="button" onClick={onClickSettings} Icon={Setting2} text={settingsText} />
      </div>

      <Divider spacing={isMobile ? 0 : 8} opacity={1} />
      <MenuIcon type="button" onClick={onClick} Icon={LogoutCurve} text={logoutText} />
    </div>
  )
}

export const ListMenuIcons = withStyles(Component)
