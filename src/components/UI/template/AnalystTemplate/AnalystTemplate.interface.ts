import { IHeaderAnalystProps } from '@components/UI/organism'
import { INavMenuDrawerAnalystProps } from '@components/UI/organism/NavMenuDrawerAnalyst'

export interface IAnalystTemplate {
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
}
