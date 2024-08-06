import { IHeaderAnalystProps, IModalAnalyst, INavMenuAnalystRegion } from '@components/UI/organism'
import { INavMenuDrawerAnalystProps } from '@components/UI/organism/NavMenuDrawerAnalyst'

export interface IAnalystTemplateProps {
  /**
   * Children to render
   */
  children: React.ReactNode
  /**
   * Children class name
   */
  childrenClassName?: string
  /**
   * Template class name
   */
  className?: string
  /**
   * Container class name
   */
  containerClassName?: string
  /**
   * Header props
   */
  headerProps: IHeaderAnalystProps
  /**
   * Navigation menu props
   */
  navigationMenuProps: INavMenuDrawerAnalystProps
  /**
   * Array of modals
   */
  modals: IModalAnalyst[]
}

export interface IAnalystProviderProps {
  children: React.ReactNode
  modals?: IModalAnalyst[]
  onRegionChange?: (region: INavMenuAnalystRegion) => void
}

export interface IModalProps {
  name: string
  visible: boolean
  data?: unknown
}
