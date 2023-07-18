import React, { useState } from 'react'
import { LogoutJobsHeader } from '../../organism'
import { ILogoutJobsTemplate } from './LogoutJobsTemplate.interface'
import { Drawer } from '../../molecules/Drawer/Drawer.component'
import { ListIconLink, ListMenuItems } from '../../molecules'
import { Link, LogoComponent, MainButton } from '../../atoms'
import { LogoProps, SignInIcon, SignUpButtonStyle } from '../../../../constants/stories.constants'
import style from './LogoutJobsTemplate.module.scss'

const Muiclass = 'magneto-ui'

const LogoutJobsTemplate: React.FC<ILogoutJobsTemplate> = ({
  logoutJobsHeaderProps,
  homeUrl,
  listMenuProps,
  ListIcon
}) => {
  const { companyLogo, companySlug, signInLink, signUpButton, companyUrl } = logoutJobsHeaderProps
  const { type, href, text } = signInLink
  const { buttonText, loadingState, onClick } = signUpButton
  const [toggleDrawer, setToggleDrawer] = useState(false)

  return (
    <div className={style[`${Muiclass}-logout-jobs-template`]}>
      <LogoutJobsHeader {...logoutJobsHeaderProps} onMenuClick={() => setToggleDrawer(true)} />
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

        <div className={style[`${Muiclass}-logout-jobs-template--btn-actions`]}>
          <MainButton
            buttonSize="full"
            {...SignUpButtonStyle}
            buttonText={buttonText}
            onClick={onClick}
            loadingState={loadingState}
          />
          <Link type={type} href={href} text={text} iconProps={SignInIcon} />
        </div>

        <div className={style[`${Muiclass}-logout-jobs-template--social-media`]}>
          <ListIconLink size={34} spacing={20} listIcon={ListIcon} />
        </div>
      </Drawer>
    </div>
  )
}

export default LogoutJobsTemplate
