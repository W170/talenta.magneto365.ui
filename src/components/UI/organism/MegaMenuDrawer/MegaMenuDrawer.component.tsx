import React, { useCallback, useMemo } from 'react'
import { MainButton } from '../../atoms'
import { Drawer, ListIconLink } from '../../molecules'
import { IconItem, LogoComponent } from '../../atoms'
import { IMegaMenuDrawer } from './MegaMenuDrawer.interface'
import style from './MegaMenuDrawer.module.scss'
import {
  logoProps,
  CreateAccountButton,
  LoginButton,
  ListIcon,
  megaMenuJobsIcons,
  mobileSocialIcons
} from '@constants/stories'
import { Add, Home2 } from '@constants/icons.constants'
import { MegaMenuTabs } from '@components/UI/molecules/MegaMenuSocialTabs'
import { useMegaMenu, useMegaMenuJobs, useMegaMenuMain } from '@components/UI/template/MegaMenu/MegaMenu.context'
import { MegaMenuDrawerItem } from '@components/UI/atoms/MegaMenuDrawerItem'
import { ButtonLink } from '@components/UI/atoms/ButtonLink'

const Component: React.FC<IMegaMenuDrawer> = ({ isOpen = false, onClose }) => {
  const { homeUrl, loginProps } = useMegaMenuMain()
  const { tabs, allJobsAction } = useMegaMenuJobs()
  const {
    socialHeaderProps: { blog, helpOptions }
  } = useMegaMenu()

  const handleClose = () => {
    if (onClose) {
      onClose()
    }
  }

  const closeButton = useMemo(
    () => (
      <button onClick={onClose}>
        <IconItem icon={Add} hover={false} />
      </button>
    ),
    [onClose]
  )

  const isActiveOption = useCallback((url: string) => {
    const currentPage = window.location.href
    return currentPage == url
  }, [])

  const options = useMemo(
    () =>
      tabs.map((tab, index) => (
        <MegaMenuDrawerItem
          text={tab.label}
          url={tab.url}
          content={{
            child: tab.content,
            title: tab.label
          }}
          isActive={isActiveOption(tab.url)}
          key={index}
          icon={megaMenuJobsIcons[index]}
        />
      )),
    [isActiveOption, tabs]
  )

  const socialOptions = useMemo(
    () =>
      [blog, ...helpOptions].map((tab, index) => (
        <MegaMenuDrawerItem
          text={tab?.label ?? ''}
          url={tab?.url ?? ''}
          isActive={isActiveOption(tab?.url ?? '')}
          key={index}
          icon={mobileSocialIcons[index]}
        />
      )),
    [blog, helpOptions, isActiveOption]
  )

  const signUpActions = useMemo(
    () => (
      <>
        <MainButton
          buttonSize="full"
          {...CreateAccountButton}
          buttonText={loginProps?.signUpText || ''}
          onClick={loginProps?.onClickSignUp || undefined}
        />

        <MainButton
          buttonSize="full"
          {...LoginButton}
          buttonText={loginProps?.loginText || ''}
          onClick={() => {
            window.location.replace(loginProps?.loginUrl ?? '')
          }}
          buttonStyles={{ buttonColor: '#f0f1f3' }}
        />
      </>
    ),
    [loginProps?.loginText, loginProps?.loginUrl, loginProps?.onClickSignUp, loginProps?.signUpText]
  )

  return (
    <Drawer
      isOpen={isOpen}
      onClose={handleClose}
      customPadding={0}
      isFull
      hideButton
      className={style['mega-menu-drawer']}
    >
      <div className={style['mega-menu-drawer__close']}>{closeButton}</div>
      <MegaMenuTabs className={style['mega-menu-drawer__tabs']} showArrows={false} />
      <div className={style['mega-menu-drawer__content']}>
        <LogoComponent {...logoProps} />

        <div className={style['mega-menu-drawer__options']}>
          <MegaMenuDrawerItem
            text={'Inicio'}
            url={homeUrl || ''}
            isActive={isActiveOption(homeUrl || '')}
            key={'home-action'}
            icon={Home2}
          />
          {options}
          <ButtonLink
            buttonText={allJobsAction?.label}
            href={allJobsAction?.url}
            className={style['mega-menu-drawer__options--action']}
          />
          {socialOptions}
        </div>

        <div className={style['mega-menu-drawer__actions']}>{signUpActions}</div>
      </div>
      <ListIconLink listIcon={ListIcon} size={34} spacing={20} className={style['mega-menu-drawer__links']} />
    </Drawer>
  )
}

export const MegaMenuDrawer = Component
