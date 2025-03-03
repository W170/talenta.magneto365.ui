import { FC } from 'react'
import { TCandidateProfilePageNav, TCandidateProfilePageProfile } from './children'
import { IHorizontalMenu } from '@components/UI/molecules'

export interface ICandidateProfileTemplate {
  screens: ICandidateScreen[]
}

export interface ICandidateProfileTemplateCompound extends React.FC<ICandidateProfileTemplate> {
  Header: FC<IHorizontalMenu>
  Profile: FC<TCandidateProfilePageProfile>
  Screen: FC
  Nav: FC<TCandidateProfilePageNav>
}

export interface ICandidateScreen<T = unknown> {
  icon: string
  name: string
  component: React.FC<T>
  title: string
}

export interface ICandidateTemplateContext {
  activeScreen: number
  screens: ICandidateScreen[]
  setActiveScreen: (index: number) => void
  isProfileOpen: boolean
  setIsProfileOpen: (state: boolean) => void
}

export interface ICandidateProvider {
  screens: ICandidateScreen[]
}
