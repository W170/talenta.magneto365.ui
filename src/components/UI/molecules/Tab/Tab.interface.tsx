import { ITabButton } from '../TabButton'

export interface ITab extends Pick<ITabButton, 'link' | 'text' | 'size'> {
  /**
   * Data type for the buttons
   */
  listButton?: ITabButton[]
  className?: string
}
