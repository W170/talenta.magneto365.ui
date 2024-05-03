import React from 'react'
import { Breadcrumbs, UserMenuWrapperAnalyst } from '@components/UI/molecules'
import { IHeaderAnalystProps } from './HeaderAnalyst.interface'
import { LogoComponent, MainButton, Link } from '@components/UI/atoms'
import { logoPropsDark, MenuButtonAnalystProps } from '@constants/stories'
import { Notification } from '@constants/icons.constants'
import { useMediaQuery } from '@components/hooks'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './HeaderAnalyst.module.scss'

const Component: React.FC<IHeaderAnalystProps> = ({
  breadCrumbProps,
  className = '',
  logoProps = { ...logoPropsDark },
  onMainMenuClick,
  userMenuProps,
  userNotificationProps
}) => {
  const headerMenuButton = useMediaQuery(<MainButton onClick={onMainMenuClick} {...MenuButtonAnalystProps} />)

  const headerLogo = useMediaQuery(
    <a href={logoProps.href} rel={logoProps.rel} target={logoProps.target}>
      <LogoComponent {...logoProps} />
    </a>,
    {
      sm: (
        <a href={logoProps.href} rel={logoProps.rel} target={logoProps.target}>
          <LogoComponent {...logoProps} isoView={true} />
        </a>
      )
    }
  )

  const userNotification = useMediaQuery(
    <Link iconProps={{ icon: Notification, size: 20 }} {...userNotificationProps} />
  )

  const userMenuDropdownAnalyst = useMediaQuery(<UserMenuWrapperAnalyst {...userMenuProps} />)

  const headerBreadCrumb = useMediaQuery(breadCrumbProps && <Breadcrumbs {...breadCrumbProps} />, {
    sm: null
  })

  return (
    <header className={CNM.get({ styles, cls: ['header-analyst', className] })}>
      <div className={CNM.get({ styles, cls: ['header-analyst__container'] })}>
        <div className={CNM.get({ styles, cls: ['header-analyst__main-menu'] })}>
          {headerMenuButton}
          {headerLogo}
        </div>
        <div className={CNM.get({ styles, cls: ['header-analyst__user-menu'] })}>
          {userNotificationProps && userNotification}
          {userMenuDropdownAnalyst}
        </div>
      </div>
      <div className={CNM.get({ styles, cls: ['header-analyst__container'] })}>{headerBreadCrumb}</div>
    </header>
  )
}

/**
 * Organism UI component of header analyst
 */
export const HeaderAnalyst = Component
