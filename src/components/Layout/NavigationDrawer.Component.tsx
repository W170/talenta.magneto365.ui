import React, { useMemo } from 'react'
import { Badge, Drawer } from 'antd'

import './NavigationDrawer.Style.scss'
import { INavigationDrawer } from './NavigationDrawer.Interface'

const NavigationDrawer = ({ navigationItems, ...drawer }: INavigationDrawer) => {
  const displayMenu = useMemo(() => {
    return navigationItems.map((item, index) => (
      <div key={`menu-item-${index}`}>
        <div className="main-nav__aside__title">{item.title}</div>
        {item.subChildren.map(({ badge, ...linkProps }, key) => {
          const displayLink = (
            <a {...linkProps}>
              <i className={linkProps.icon} /> {linkProps.title}
            </a>
          )
          return (
            <div key={`menu-item-${index}-children-${key}`} className="main-nav__aside__item">
              {badge ? (
                <Badge.Ribbon className="main-nav__aside__item--new" text={badge.text}>
                  {displayLink}
                </Badge.Ribbon>
              ) : (
                displayLink
              )}
            </div>
          )
        })}
      </div>
    ))
  }, [navigationItems])

  return (
    <Drawer className="main-nav__aside" {...drawer}>
      {displayMenu}
    </Drawer>
  )
}

export default NavigationDrawer
