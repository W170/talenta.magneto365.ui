import React from 'react'
import { Breadcrumbs, UserMenuWrapperAnalyst } from '@components/UI/molecules'
import { logoPropsDark, MenuButtonAnalystProps } from '@constants/stories'
import { LogoComponent, MainButton, Link } from '@components/UI/atoms'
import { IHeaderAnalyst } from './HeaderAnalyst.interface'
import { Notification } from '@constants/icons.constants'
import { useMediaQuery } from '@components/hooks'
import { classNames } from '@shared/utils/common'
import styles from './HeaderAnalyst.module.scss'

const cx = classNames.bind(styles)

const Component: React.FC<IHeaderAnalyst> = ({
  breadCrumbProps,
  className = '',
  handleModal,
  legend,
  logoProps = { fallbackImage: logoPropsDark.logo, ...logoPropsDark },
  onMainMenuClick,
  userMenuProps,
  userNotificationProps
}) => {
  const headerLogo = useMediaQuery(
    <a href={logoProps.href} rel={logoProps.rel} target={logoProps.target}>
      <LogoComponent fallbackImage={logoPropsDark.logo} {...logoProps} />
    </a>,
    {
      sm: (
        <a href={logoProps.href} rel={logoProps.rel} target={logoProps.target}>
          <LogoComponent fallbackImage={logoPropsDark.isoType} {...logoProps} isoView={true} />
        </a>
      )
    }
  )

  const headerBreadCrumb = useMediaQuery(breadCrumbProps && <Breadcrumbs {...breadCrumbProps} />, {
    sm: null
  })

  return (
    <header className={cx('magneto-ui-header-analyst', className)}>
      <div className={cx('magneto-ui-header-analyst__container')}>
        <div className={cx('magneto-ui-header-analyst__main-menu')}>
          <div className={cx('magneto-ui-header-analyst__logo')}>
            <MainButton onClick={onMainMenuClick} {...MenuButtonAnalystProps} />
            {headerLogo}
          </div>
          {legend && <span className={cx('magneto-ui-header-analyst__legend')}>{legend}</span>}
        </div>
        <div className={cx('magneto-ui-header-analyst__user-menu')}>
          {userNotificationProps && <Link iconProps={{ icon: Notification, size: 20 }} {...userNotificationProps} />}
          <UserMenuWrapperAnalyst {...userMenuProps} handleModal={handleModal} />
        </div>
      </div>
      <div className={cx('magneto-ui-header-analyst__container')}>{headerBreadCrumb}</div>
    </header>
  )
}

/**
 * Organism UI component of header analyst
 */
export const HeaderAnalyst = Component
