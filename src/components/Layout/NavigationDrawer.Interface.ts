export interface INavigationDrawer {
  lang: string
  navigationItems: INavigationItem[]
  placement: 'top' | 'right' | 'bottom' | 'left'
  visible: boolean
  width: number
  onClose: () => void
}

export interface INavigationItem {
  title: string
  subChildren: INavigationLink[]
}

export interface INavigationLink {
  title: string
  icon: string
  target: '_self' | '_blank' | '_parent' | '_top'
  rel: 'noreferrer' | 'noopener' | string
  href: string
  badge?: {
    text: string
  }
}
