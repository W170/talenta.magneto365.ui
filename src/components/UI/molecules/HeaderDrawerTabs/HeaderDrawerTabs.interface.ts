import { ILinkProps, ILogoComponent } from '../../atoms'
import { ITabButton } from '../TabButton'

export interface IHeaderDrawerTabs {
  logoProps?: ILogoComponent
  leftTabLink?: ILinkProps
  rightTabLink?: ILinkProps
  leftTabStyle?: ITabButton
  rightTabStyle?: ITabButton
  homeUrl: string
}
