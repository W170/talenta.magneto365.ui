import { IAvatar } from '../../atoms'
import { IlistMenuUserProps } from '../../organism'

export interface IMenuUser {
  /**
   * menu items props
   */
  profileImage: IAvatar
  listMenuUserProps: IlistMenuUserProps
  clickOut?: boolean
  setClickOut?: React.Dispatch<React.SetStateAction<boolean>>
  /**
   * Optional render prop displayed at the top of the popover content.
   */
  renderHeader?: () => React.ReactNode
}

export interface IUseUserMenuNavigationParams {
  /**
   * Whether the popover is currently open.
   */
  isOpen: boolean
  /**
   * Opens or closes the popover.
   */
  setIsOpen: (value: boolean) => void
}

export interface IUseUserMenuNavigationReturn {
  /**
   * Id shared between the trigger's `aria-controls` and the panel's `id`.
   */
  menuId: string
  /**
   * Ref for the Avatar trigger, focused back when the menu closes.
   */
  triggerRef: React.RefObject<HTMLDivElement>
  /**
   * Ref for the panel content, used to find its focusable items.
   */
  menuRef: React.RefObject<HTMLDivElement>
  /**
   * Keydown handler for the panel: arrow keys, Home/End, Tab loop and Escape.
   */
  onMenuKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void
}
