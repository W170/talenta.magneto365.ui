import { IMegaMenuTab } from '@components/UI/atoms/MegaMenuTab/MegaMenuTab.interface'
import { ISearchbar } from '@components/UI/molecules'
import { ReactNode } from 'react'

export interface IMegaMenuLink {
  label: string
  url: string
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
  searchBarProps?: ISearchbar
  logoProps?: {
    url: string
  }
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
}

export interface IMegaMenuContext {
  socialHeaderProps: IMegaMenuSocialHeader
  jobsProps: IMegaMenuJobs
  mainHeaderProps: IMegaMenuMainHeader
}