import { ListMenuText } from '@components/UI/molecules'
import { MenuCollapse } from '@components/UI/molecules/MenuCollapse'
import { useMediaQuery } from '@components/hooks'
import React, { Fragment } from 'react'
import { IFooterMenuLinks } from './FooterMenuLinks.interface'
import { classMUI } from '@constants/stories'
import style from './FooterMenuLinks.module.scss'

const FooterMenuLinks: React.FC<IFooterMenuLinks> = ({ ...menuList }) => {
  const { legalMenu, magnetoLiteMenu, magnetoMenu, otherSolutionsMenu, personsMenu } = menuList

  const footerMenuResponsive = useMediaQuery(
    <div className={`${style[`${classMUI}-menu-list`]}`}>
      <div className={`${style[`${classMUI}-menu-list__columns`]}`}>
        <ListMenuText {...personsMenu} />
      </div>
      <div className={`${style[`${classMUI}-menu-list__columns`]}`}>
        <ListMenuText {...magnetoMenu} />
        <ListMenuText {...magnetoLiteMenu} />
        <ListMenuText {...otherSolutionsMenu} />
      </div>
      <div className={`${style[`${classMUI}-menu-list__columns`]}`}>
        <ListMenuText {...legalMenu} />
      </div>
    </div>,
    {
      sm: <MenuCollapse listMenu={menuList} />
    }
  )

  return <>{footerMenuResponsive}</>
}

export default FooterMenuLinks
