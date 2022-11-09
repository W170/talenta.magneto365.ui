import React, { useEffect, useMemo, useState } from 'react'
import { Badge, Drawer } from 'antd'

import './NavigationDrawer.Style.scss'
import { INavigationDrawer, INavigationItem } from './NavigationDrawer.Interface'
import { NavigationDrawerService } from './NavigationDrawer.Service'
import Region from '../Region/Region.Component'
import { DEFAULT_LOCALES } from '../Region/Region.constant'

const NavigationDrawer = ({
  lang,
  queryString = {},
  onRegionChange,
  locales = DEFAULT_LOCALES,
  ...drawer
}: INavigationDrawer) => {
  const [intent, setIntent] = useState<number>(1)
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
                <Badge className="main-nav__aside__item--new" count={badge.text} style={{ backgroundColor: '#00d461' }}>
                  {displayLink}
                </Badge>
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
    if ((menuItems && menuItems.length) || intent > 3) return
    httpClient
      .get<INavigationItem[]>('v1/menu')
      .then((response) => {
        setMenuItems(response.data)
      })
      .catch(() => {
        setIntent((value) => value + 1)
      })
  }, [httpClient, menuItems, intent])

  return (
    <Drawer className="main-nav__aside" {...drawer}>
      {displayMenu}
      <div>
        <div className="main-nav__aside__title">{locales?.mainTitle}</div>
        <div className="main-nav__aside__item">
          <Region lang={lang} onRegionChange={onRegionChange} locales={locales} />
        </div>
      </div>
    </Drawer>
  )
}

export default NavigationDrawer
