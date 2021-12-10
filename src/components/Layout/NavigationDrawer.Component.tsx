import React, { useEffect, useMemo, useState } from 'react'
import { Badge, Drawer } from 'antd'

import './NavigationDrawer.Style.scss'
import { INavigationDrawer, INavigationItem } from './NavigationDrawer.Interface'
import { NavigationDrawerService } from './NavigationDrawer.Service'

const NavigationDrawer = ({ lang, queryString = {}, ...drawer }: INavigationDrawer) => {
  const [menuItems, setMenuItems] = useState<INavigationItem[]>([])

  const httpClient = useMemo(() => {
    return NavigationDrawerService({ lang })
  }, [lang])

  const displayMenu = useMemo(() => {
    const query = Object.entries(queryString)
      .flatMap((item) => item.join('='))
      .join('&')

    return menuItems.map((item, index) => (
      <div key={`menu-item-${index}`}>
        <div className="main-nav__aside__title">{item.title}</div>
        {item.subChildren.map(({ badge, href, useQueryString, ...linkProps }, key) => {
          const displayLink = (
            <a href={useQueryString ? `${href}?${query}` : href} {...linkProps}>
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
  }, [menuItems, queryString])

  useEffect(() => {
    if (menuItems && menuItems.length) return
    httpClient.get<INavigationItem[]>('v1/menu').then((response) => {
      setMenuItems(response.data)
    })
  }, [httpClient, menuItems])

  return (
    <Drawer className="main-nav__aside" {...drawer}>
      {displayMenu}
    </Drawer>
  )
}

export default NavigationDrawer
