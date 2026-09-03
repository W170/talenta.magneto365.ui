import { ISortMenuItem } from '../'

export interface IListSortMenu {
  /**
   * This is an array with the menu options
   */
  orderFields: ISortMenuItem[]
  /**
   * This function change the filter with the selected option
   */
  setFilter: (menuItem: { key: string }) => void
  /**
   * This is the current text
   */
  textOrderFilter: string
  /**
   * This function can close the popover
   */
  setShowPopover: React.Dispatch<React.SetStateAction<boolean>>
  /**
   * id for the list container, referenced by the trigger's aria-controls
   */
  menuId?: string
  /**
   * Accessible label for the list when it behaves as an ARIA menu
   */
  menuLabel?: string
  /**
   * Ref to the list container, used for keyboard focus management
   */
  menuRef?: React.Ref<HTMLDivElement>
  /**
   * Keydown handler for roving focus / close behaviour. When provided, the list
   * renders with menu semantics (role="menu" / role="menuitem")
   */
  onMenuKeyDown?: React.KeyboardEventHandler<HTMLDivElement>
  /**
   * Called after an option is selected, so the caller can restore focus
   */
  onSelect?: () => void
}
