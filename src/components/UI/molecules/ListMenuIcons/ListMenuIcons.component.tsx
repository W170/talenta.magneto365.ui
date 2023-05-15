import React, { Fragment, useContext, useMemo } from 'react'
import { LogoutCurve } from 'iconsax-react'
import { Divider } from '../../atoms/Divider'
import { MenuIcon } from '../MenuIcon'
import { IListMenuIcons } from './ListMenuIcons.interface'
import { withStyles } from './ListMenuIcons.styles'
import { screenSize } from '../../../../constants/responsive.constants'
import { ResponsiveContext } from '../../../context/ResponsiveContext.component'

const Component: React.FC<IListMenuIcons> = ({ urlParam, menuItems, className }) => {
  const { dim } = useContext(ResponsiveContext)

  const isMobile = useMemo(() => {
    return dim.size <= screenSize.md
  }, [dim.size])

  return (
    <div className={className}>
      {menuItems.map(({ title, items }, i: number) => (
        <div key={i}>
          <p>{title ? title : null}</p>
          {items.map(({ slug, ...props }, i: number) => (
            <Fragment key={i}>
              <MenuIcon isActive={urlParam === slug ? true : false} {...props} />
            </Fragment>
          ))}
          <Divider spacing={isMobile ? 0 : 30} opacity={1} />
        </div>
      ))}
      <MenuIcon type="button" onClick={() => ({})} Icon={LogoutCurve} text="Cerrar sesión" />
    </div>
  )
}

export const ListMenuIcons = withStyles(Component)
