import { ITabButton } from '../TabButton'

export interface ITab {
  /**
   * Href for the secondary section in tab
   */
  href: string
  /**
   * Text for the secondary section in tab
   */
  label: string
  /**
   * Props for the children button
   */
  childrenProps: ITabButton
}
