import { ShareIcons } from '../../../../constants/vacancies.constants'
import { IShareButton } from '../../atoms'
export interface IShareLink {
  /**
   * The URL to navigate to when the list item is clicked.
   */
  href: string
  /**
   * The ARIA label for the list item, providing accessibility information.
   */
  ariaLabel: string
  /**
   * The icon associated with the list item. Can be null if there is no icon.
   */
  icon?: string | null
  /**
   * The title or label for the list item.
   */
  title: string
  /**
   * Name that match with default icon.
   */
  name?: keyof typeof ShareIcons
}

export interface ISharePopover extends IShareButton {
  shareLinks?: IShareLink[]

  classNameContent?: string

  classNameButton?: string

  /**
   * These props will apply in the popover content,
   * (in the button component to be more specific).
   */
  btnProps?: JSX.IntrinsicElements['button']
  /**
   * Indicates whether the component is default or detailed.
   */
  iconPopover?: string
  /**
   * Optional text to be displayed on the save button.
   * (Optional property)
   */
  buttonText?: string
  /**
   * Indicates size iconPopover.
   */
  iconPopoverSize?: number
}
