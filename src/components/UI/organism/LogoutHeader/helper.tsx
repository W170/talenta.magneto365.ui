import React, { useState } from 'react'
import { MainButton } from '../../atoms/MainButton'
import { Link } from '../../atoms/Link'
import { LogoComponent } from '../../atoms/Logo'
import { Breadcrumbs } from '../../molecules/Breadcrumbs'
import { MobileSearchbar } from '../../molecules/MobileSearchbar'
import { Searchbar } from '../../molecules/Searchbar'
import { Tab } from '../../molecules/Tab'

import { useMediaQuery } from '../../../hooks'
import { ILogoutHeader } from './LogoutHeader.interface'

import {
  TabProps,
  LogoProps,
  SignInLinkProps,
  SignUpButtonProps,
  MenuButtonProps,
  MobileSearchbarButtonProps,
  MobileSearchbarProps,
  SearchbarProps,
  BreadcrumbsProps
} from '../../../../constants/stories.constants'

export const useLogoutHeaderSections = ({ onClick }: ILogoutHeader) => {
  const [showSearchBar, setShowSearchBar] = useState(false)
  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar)
  }

  const logoutHeaderTab = useMediaQuery(<Tab {...TabProps} />, {
    md: null
  })

  const logoutHeaderMobileSearchbar = useMediaQuery(null, {
    md: (
      <MobileSearchbar
        {...MobileSearchbarProps}
        onClick={() => setShowSearchBar(false)}
        showMobileSearchbar={showSearchBar}
      />
    )
  })

  const logoutHeaderMenuButton = useMediaQuery(<MainButton {...MenuButtonProps} onClick={onClick} />)

  const logoutHeaderLogo = useMediaQuery(<LogoComponent {...LogoProps} />, {
    sm: <LogoComponent {...LogoProps} isoView={true} />
  })

  const logoutHeaderMobileSearchbarButton = useMediaQuery(null, {
    md: <MainButton onClick={toggleSearchBar} {...MobileSearchbarButtonProps} />
  })

  const logoutHeaderSearchbar = useMediaQuery(<Searchbar {...SearchbarProps} />, {
    md: null
  })

  const isMobileButton = useMediaQuery(false, {
    md: true
  })

  const logoutHeaderSignInLink = useMediaQuery(<Link {...SignInLinkProps} isMobile={isMobileButton} />)

  const logoutHeaderButtonSignUp = useMediaQuery(
    <MainButton {...SignUpButtonProps} isMobile={isMobileButton} spacing={10} />
  )

  const logoutHeaderBreadcrumbs = useMediaQuery(<Breadcrumbs {...BreadcrumbsProps} />, {
    md: null
  })

  return {
    logoutHeaderTab,
    logoutHeaderMenuButton,
    logoutHeaderLogo,
    logoutHeaderMobileSearchbarButton,
    logoutHeaderMobileSearchbar,
    logoutHeaderSearchbar,
    logoutHeaderSignInLink,
    logoutHeaderButtonSignUp,
    logoutHeaderBreadcrumbs
  }
}
