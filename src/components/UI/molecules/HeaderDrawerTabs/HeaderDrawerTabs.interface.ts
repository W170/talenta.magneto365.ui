import { ITab } from '../Tab'

export interface IHeaderDrawerTabs {
  className?: string
  logo: string
  logoSize: number
  alt: string
  isoType: string
  isoTypeSize?: number
  tabProps?: ITab
  spacing?: number
}
