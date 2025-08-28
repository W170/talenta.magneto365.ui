import { IMegaMenuTab } from '@components/UI/atoms/MegaMenuTab/MegaMenuTab.interface'
import { ISearchbar } from '@components/UI/molecules'
import { IPopoverRef } from '@components/UI/molecules/MegaMenuPopover/MegaMenuPopover.interface'
import { IlistMenuUserProps } from '@components/UI/organism'
import React, { ReactNode } from 'react'
import { ISelectOptions } from '@components/UI/organism/Select2/Select2.interface'
import { IMegaMenuSearchBar } from '@components/UI/molecules/MegaMenuSearchBar/MegaMenuSearchBar.interface'

export interface IMegaMenuLink {
  label: string
  url: string
  onClick?: () => void
  target?: string
  icon?: string | undefined
}

export interface IMegaMenuAction {
  label: string
  icon?: string | undefined
}

export interface IMegaMenuSocialHeader {
  helpOptions: IMegaMenuLink[]
  tabs: IMegaMenuTab[]
  helpAction?: IMegaMenuAction
  blog?: IMegaMenuLink
}

export interface IMegaMenuMainHeader {
  loginProps?: {
    loginText: string
    loginUrl: string
    signUpText: string
    onClickSignUp: (event: Event) => Promise<void>
  }
  selectCountry?: ISelectOptions<unknown>
  searchBarProps?: IMegaMenuSearchBar
  mobileSearchBarProps: ISearchbar
  homeUrl?: string
  homeText?: string
}

export interface IMegaMenuJobsTabs {
  label: string
  url: string
  content?: ReactNode
}

export interface IMegaMenuJobs {
  tabs: IMegaMenuJobsTabs[]
  onChangeTab?: (index: number) => void
  jobAction?: IMegaMenuAction
  allJobsAction?: IMegaMenuLink
  popoverRef?: React.Ref<IPopoverRef>
}

export interface IMegaMenuContext {
  socialHeaderProps: IMegaMenuSocialHeader
  jobsProps: IMegaMenuJobs
  mainHeaderProps: IMegaMenuMainHeader
  listMenuUserProps: IlistMenuUserProps
}
