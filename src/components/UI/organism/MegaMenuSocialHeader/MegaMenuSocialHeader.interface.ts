import { IMegaMenuTabs } from '@components/UI/molecules/MegaMenuTabs/MegaMenuTabs.interface'

export interface IMegaMenuSocialHeader {
  tabs: IMegaMenuTabs
  blog: {
    text: string
    url: string
  }
  helpOptions: {
    icon: string
    label: string
    url: string
  }[]
}
