import * as React from 'react'
import { DrawerProps } from 'antd/lib/drawer'
import { IRegionLocales } from '../Region'

export interface INavigationDrawer extends React.FC<DrawerProps> {
  lang: string
  placement: 'top' | 'right' | 'bottom' | 'left'
  visible: boolean
  width: number
  queryString?: {
    [key: string]: string
  }
  onClose: () => void
  onRegionChange: (lng: string) => void
  locales?: IRegionLocales
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
  useQueryString: boolean
  href: string
  badge?: {
    text: string
  }
}

export interface IHttpClient {
  lang: string
}
