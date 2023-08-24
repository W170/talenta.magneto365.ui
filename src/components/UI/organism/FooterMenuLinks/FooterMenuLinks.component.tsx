import { ListMenuText } from '@components/UI/molecules'
import { MenuCollapse } from '@components/UI/molecules/MenuCollapse'
import { useMediaQuery } from '@components/hooks'
import React, { Fragment } from 'react'
import { IFooterMenuLinks } from './FooterMenuLinks.interface'

const FooterMenuLinks: React.FC<IFooterMenuLinks> = ({ menuList }) => {
  const footerMenuResponsive = useMediaQuery(
    <>
      {menuList.map(({ ...props }, i) => (
        <Fragment key={i}>
          <ListMenuText {...props} />
        </Fragment>
      ))}
    </>,
    {
      sm: <MenuCollapse listMenu={menuList} />
    }
  )

  return <>{footerMenuResponsive}</>
}

export default FooterMenuLinks
