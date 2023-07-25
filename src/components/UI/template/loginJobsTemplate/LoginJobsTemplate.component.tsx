import React, { useState } from 'react'
import { LoginJobsHeader } from '../../organism'
import { ILoginJobsTemplate } from './LoginJobsTemplate.interface'
import { Drawer } from '../../molecules/Drawer/Drawer.component'
import { ListIconLink, ListMenuItems } from '../../molecules'
import { LogoComponent } from '../../atoms'
import { LogoProps } from '../../../../constants/stories.constants'
import style from './LoginJobsTemplate.module.scss'

const Muiclass = 'magneto-ui'

const LoginJobsTemplate: React.FC<ILoginJobsTemplate> = ({
  LoginJobsHeaderProps,
  homeUrl,
  listMenuProps,
  ListIcon
}) => {
  const {
    brandMenuProps: { companyLogo, companySlug, companyUrl }
  } = LoginJobsHeaderProps
  const [toggleDrawer, setToggleDrawer] = useState(false)

  return (
    <div className={style[`${Muiclass}-logout-jobs-template`]}>
      <LoginJobsHeader {...LoginJobsHeaderProps} onMenuClick={() => setToggleDrawer(true)} />
      <Drawer isOpen={toggleDrawer} onClose={() => setToggleDrawer(false)}>
        <div className={style[`${Muiclass}-logout-jobs-template--brands`]}>
          <a href={homeUrl}>
            <LogoComponent {...LogoProps} isoView={true} />
          </a>
          <a href={companyUrl}>
            <img
              className={style[`${Muiclass}-logout-jobs-template--company-logo`]}
              src={companyLogo}
              alt={companySlug}
            />
          </a>
        </div>

        <div className={style[`${Muiclass}-logout-jobs-template--jobs-menu`]}>
          <ListMenuItems {...listMenuProps} />
        </div>

        <div className={style[`${Muiclass}-logout-jobs-template--social-media`]}>
          <ListIconLink size={34} spacing={20} listIcon={ListIcon} />
        </div>
      </Drawer>
    </div>
  )
}

export default LoginJobsTemplate
