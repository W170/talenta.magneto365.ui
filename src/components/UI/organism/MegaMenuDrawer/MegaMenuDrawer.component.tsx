import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { MainButton } from '../../atoms'
import { Drawer, ListIconLink } from '../../molecules'
import { IconItem, LogoComponent } from '../../atoms'
import { IMegaMenuDrawer } from './MegaMenuDrawer.interface'
import style from './MegaMenuDrawer.module.scss'
import {
  logoProps,
  CreateAccountButton,
  LoginButton,
  ListMegaMenu,
  megaMenuJobsIcons,
  mobileSocialIcons
} from '@constants/stories'
import { Add, Home2 } from '@constants/icons.constants'
import { MegaMenuTabs } from '@components/UI/molecules/MegaMenuSocialTabs'
import { useMegaMenu, useMegaMenuJobs, useMegaMenuMain } from '@components/UI/template/MegaMenu/MegaMenu.context'
import { MegaMenuDrawerItem } from '@components/UI/molecules/MegaMenuDrawerItem'
import { ButtonLink } from '@components/UI/atoms/ButtonLink'

const Component: React.FC<IMegaMenuDrawer> = ({ isOpen = false, onClose, socialHeaderVariantProps }) => {
  const [currentPage, setCurrentPage] = useState('')
  const { homeUrl, homeText, loginProps } = useMegaMenuMain()
  const { tabs, allJobsAction, onChangeTab } = useMegaMenuJobs()
  const {
    socialHeaderProps: { blog, helpOptions }
  } = useMegaMenu()

  const isCandidate = socialHeaderVariantProps?.variant === 'candidate'
  const tabsPrefix = socialHeaderVariantProps?.tabsPrefix
  const promo = socialHeaderVariantProps?.promo

  const handleClose = () => {
    if (onClose) {
      onClose()
    }
  }
  const onClickOption = useCallback((index: number) => () => onChangeTab && onChangeTab(index), [onChangeTab])

  const closeButton = useMemo(
    () => (
      <button onClick={onClose}>
        <IconItem icon={Add} hover={false} />
      </button>
    ),
    [onClose]
  )

  const isActiveOption = useCallback(
    (url: string) => {
      return currentPage == url
    },
    [currentPage]
  )

  useEffect(() => {
    if (typeof window == 'undefined') return
    setCurrentPage(window.location.href)
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
          onClickOption={onClickOption(index)}
          isActive={isActiveOption(tab.url)}
          key={index}
          icon={megaMenuJobsIcons[index]}
        />
      )),
    [isActiveOption, onClickOption, tabs]
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
      className={`${style['mega-menu-drawer']} ${isCandidate ? style['mega-menu-drawer--candidate'] : ''}`}
    >
      <div
        className={`${style['mega-menu-drawer__header']} ${
          isCandidate ? style['mega-menu-drawer__header--candidate'] : ''
        }`}
      >
        <div
          className={`${style['mega-menu-drawer__header-top']} ${
            isCandidate ? style['mega-menu-drawer__header-top--candidate'] : ''
          }`}
        >
          {isCandidate && tabsPrefix && <span className={style['mega-menu-drawer__tabs-prefix']}>{tabsPrefix}</span>}
          <div
            className={`${style['mega-menu-drawer__close']} ${
              isCandidate ? style['mega-menu-drawer__close--candidate'] : ''
            }`}
          >
            {closeButton}
          </div>
        </div>
        <div className={style['mega-menu-drawer__tabs-container']}>
          <MegaMenuTabs
            className={`${style['mega-menu-drawer__tabs']} ${
              isCandidate ? style['mega-menu-drawer__tabs--candidate'] : ''
            }`}
            showArrows={false}
          />
        </div>
      </div>
      <div className={style['mega-menu-drawer__content']}>
        <LogoComponent {...logoProps} />

        <div className={style['mega-menu-drawer__options']}>
          <MegaMenuDrawerItem
            text={homeText ?? 'Inicio'}
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
      {isCandidate && promo && (
        <div className={style['mega-menu-drawer__promo']}>
          <span>{promo.content}</span>
          <a href={promo.linkUrl} className={style['mega-menu-drawer__promo-link']}>
            {promo.linkText}
          </a>
        </div>
      )}
      <ListIconLink
        listIcon={ListMegaMenu}
        size={34}
        spacing={20}
        className={`${style['mega-menu-drawer__links']} ${
          isCandidate ? style['mega-menu-drawer__links--candidate'] : ''
        }`}
      />
    </Drawer>
  )
}

export const MegaMenuDrawer = Component
