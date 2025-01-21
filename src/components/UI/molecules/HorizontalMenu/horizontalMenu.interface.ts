export interface IHorizontalMenu {
  /**
   * Class name of horizontal menu
   */
  className?: string
  /**
   * options of horizontal menu
   */
  options: { icon: string; label: string }[]

  /**
   * onChange of horizontal menu
   */
  onChange?: (selectedItem: number) => void
  /**
   * onclick of horizontal menu
   */
  onclick?: () => void
}
