import React, { useState } from 'react'
import { Avatar, Field, IconItem, Link, LogoComponent, MainButton, Typography } from '@components/UI/atoms'
import { ListMenuIcons, MegaMenuJobsTabs, MegaMenuPopover, MobileDrawer, UserMenu } from '@components/UI/molecules'
import styles from './MegaMenuMainHeader.modules.scss'
import {
  SignInIcon,
  SignInStyles,
  SignUpButtonStyle,
  logoProps,
  MobileSearchbarButtonProps,
  MenuButtonProps
} from '@constants/stories'
import { useLoggedInUser, useMegaMenuJobs, useMegaMenuMain } from '@components/UI/template/MegaMenu/MegaMenu.context'
import { SearchButton } from '@components/UI/molecules/SearchButton/SearchButton.component'
import { useMediaQuery } from '@components/hooks'
import { MobileSearchbar } from '../../molecules'
import { IMegaMenuMainHeader } from './MegaMenuMainHeader.interface'
import { Select2 } from '../Select2'
import MegaMenuSearchBar from '@components/UI/molecules/MegaMenuSearchBar/MegaMenuSearchBar.component'
import { ArrowDown2 } from '@constants/icons.constants'

const Component: React.FC<IMegaMenuMainHeader> = ({ toggleDrawerMenu }) => {
  const [showSearchBar, setShowSearchBar] = useState(false)
  const [toggleMobileDrawer, setToggleMobileDrawer] = useState(false)
  const { homeUrl, searchBarProps, loginProps, selectCountry, mobileSearchBarProps } = useMegaMenuMain()
  const { popoverRef } = useMegaMenuJobs()

  const listMenuUserProps = useLoggedInUser()
  const { profileImage = {}, isAuthenticated } = listMenuUserProps
  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar)
  }
  const isMobileButton = useMediaQuery(false, { md: true })

  const renderLogo = useMediaQuery(<LogoComponent {...logoProps} />, {
    sm: <LogoComponent {...logoProps} isoView />
  })

  const LogoutHeaderMobileSearchbar = useMediaQuery(null, {
    md: (
      <>
        {searchBarProps && (
          <MobileSearchbar
            {...mobileSearchBarProps}
            termValue={mobileSearchBarProps?.termValue}
            onClick={() => setShowSearchBar(false)}
            showMobileSearchbar={showSearchBar}
            focusSearchInput={showSearchBar}
          />
        )}
      </>
    )
  })

  const renderSearchBar = useMediaQuery(
    <>
      {searchBarProps && <MegaMenuSearchBar {...searchBarProps} />}
      <MegaMenuPopover popoverRef={popoverRef}>
        <MegaMenuJobsTabs />
      </MegaMenuPopover>
    </>,
    {
      md: searchBarProps && (
        <SearchButton
          searchValue={searchBarProps.occupation.termValue}
          buttonSize={'small'}
          onClick={toggleSearchBar}
          className={styles['mega-menu-main-header__search-button']}
          {...MobileSearchbarButtonProps}
        />
      )
    }
  )

  const LogoutHeaderMenuButton = useMediaQuery(null, {
    md: <MainButton {...MenuButtonProps} className={styles['mega-menu-main-header__menu']} onClick={toggleDrawerMenu} />
  })

  const loginAction = (
    <Link
      type={'button'}
      href={loginProps?.loginUrl || ''}
      text={loginProps?.loginText || ''}
      iconProps={{ ...SignInIcon, size: 15 }}
      linkStyles={{ ...SignInStyles, buttonColor: '#FFFFFF' }}
      isMobile={isMobileButton}
    />
  )

  const logoutAction = (
    <MainButton
      {...SignUpButtonStyle}
      buttonText={loginProps?.signUpText || ''}
      onClick={loginProps?.onClickSignUp || undefined}
      buttonSize={'medium'}
      iconProps={{ ...SignUpButtonStyle.iconProps, size: 15 }}
      isMobile={isMobileButton}
    />
  )

  const selectedCountry = selectCountry?.currentFields?.[0] ?? selectCountry?.selectList?.[0]

  const renderCountrySelector = useMediaQuery(
    <Select2
      haveTags={false}
      isMultiple={false}
      {...(selectCountry as NonNullable<typeof selectCountry>)}
      className={`${styles['mega-menu-main-header__country']} ${selectCountry?.className || ''}`}
    />,
    {
      md: (
        <Field className={styles['mega-menu-main-header__country-field']}>
          <Field.List.Wrapper>
            <Field.Input
              type="button"
              value={''}
              prefix={
                selectedCountry?.img ? (
                  <img
                    src={selectedCountry.img}
                    alt={selectedCountry.name}
                    className={styles['mega-menu-main-header__country-flag']}
                  />
                ) : undefined
              }
              suffix={({ opened }) => (
                <div
                  className={`${styles['mega-menu-main-header__country-arrow']} ${
                    opened ? styles['mega-menu-main-header__country-arrow--opened'] : ''
                  }`}
                >
                  <IconItem size={16} icon={ArrowDown2} />
                </div>
              )}
            />
            <Field.List value={selectedCountry} onChange={(country) => selectCountry?.onChange([country])}>
              <Field.List.Body>
                {selectCountry?.selectList?.map((country) => (
                  <Field.List.Item
                    key={country.id}
                    value={country}
                    className={styles['mega-menu-main-header__country-option']}
                  >
                    {country.img && (
                      <img
                        src={country.img}
                        alt={country.name}
                        className={styles['mega-menu-main-header__country-flag']}
                      />
                    )}
                    <Typography.Text>{country.name}</Typography.Text>
                  </Field.List.Item>
                ))}
              </Field.List.Body>
            </Field.List>
          </Field.List.Wrapper>
        </Field>
      )
    }
  )

  const loginHeaderPopover = useMediaQuery(
    <UserMenu listMenuUserProps={listMenuUserProps} profileImage={profileImage} />,
    {
      md: <Avatar {...profileImage} onClick={() => setToggleMobileDrawer(true)} />
    }
  )

  return (
    <div className={styles['mega-menu-main-header']}>
      <div className={styles['mega-menu-main-header__main']}>
        {LogoutHeaderMobileSearchbar}
        {LogoutHeaderMenuButton}
        <a href={homeUrl}>{renderLogo}</a>
        {selectCountry && renderCountrySelector}
        <div className={styles['mega-menu-main-header__search']}>{renderSearchBar}</div>
      </div>
      <div className={styles['mega-menu-main-header__login']}>
        {isAuthenticated ? (
          loginHeaderPopover
        ) : (
          <>
            {loginAction}
            {logoutAction}
          </>
        )}
      </div>
      <MobileDrawer isOpen={toggleMobileDrawer} onClose={() => setToggleMobileDrawer(false)}>
        <ListMenuIcons {...listMenuUserProps} />
      </MobileDrawer>
    </div>
  )
}

export const MegaMenuMainHeader = Component
