import { ILogoComponent } from '../../atoms/Logo/Logo.interface'
import { ITab } from '../Tab'

export interface IHeaderDrawerTabs {
  className?: string
  logoProps: ILogoComponent
  tabProps?: ITab
  spacing?: number
}
