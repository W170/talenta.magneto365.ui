import { IMegaMenuTab } from '@components/UI/atoms/MegaMenuTab/MegaMenuTab.interface'
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
export interface IMegaMenuJobsTabs {
  label: string
  content?: ReactNode
}

export interface IMegaMenuJobs {
  tabs: IMegaMenuJobsTabs[]
  jobAction?: IMegaMenuAction
  allJobsAction?: IMegaMenuLink
}

export interface IMegaMenuContext {
  socialHeaderProps: IMegaMenuSocialHeader
  jobsProps: IMegaMenuJobs
}
