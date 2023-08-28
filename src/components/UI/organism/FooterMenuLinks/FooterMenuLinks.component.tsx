import { ListMenuText } from '@components/UI/molecules'
import { MenuCollapse } from '@components/UI/molecules/MenuCollapse'
import { useMediaQuery } from '@components/hooks'
import React, { Fragment } from 'react'
import { IFooterMenuLinks } from './FooterMenuLinks.interface'
import { classMUI } from '@constants/stories.constants'
import style from './FooterMenuLinks.module.scss'

const FooterMenuLinks: React.FC<IFooterMenuLinks> = ({ menuList }) => {
  const menuListColumn1 = [menuList[0]]
  const menuListColumn2 = [menuList[1], menuList[2], menuList[3]]
  const menuListColumn3 = [menuList[4]]

  const footerMenuResponsive = useMediaQuery(
    <div className={`${style[`${classMUI}-menu-list`]}`}>
      <div className={`${style[`${classMUI}-menu-list__columns`]}`}>
        {menuListColumn1.map(({ ...props }, i) => (
          <Fragment key={i}>
            <ListMenuText {...props} />
          </Fragment>
        ))}
      </div>
      <div className={`${style[`${classMUI}-menu-list__columns`]}`}>
        {menuListColumn2.map(({ ...props }, i) => (
          <Fragment key={i}>
            <ListMenuText {...props} />
          </Fragment>
        ))}
      </div>
      <div className={`${style[`${classMUI}-menu-list__columns`]}`}>
        {menuListColumn3.map(({ ...props }, i) => (
          <Fragment key={i}>
            <ListMenuText {...props} />
          </Fragment>
        ))}
      </div>
    </div>,
    {
      sm: <MenuCollapse listMenu={menuList} />
    }
  )

  return <>{footerMenuResponsive}</>
}

export default FooterMenuLinks
