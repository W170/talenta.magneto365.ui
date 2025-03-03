export interface IHorizontalMenu {
  /**
   * Class name of horizontal menu
   */
  className?: string
  /**
   * options of horizontal menu
   */
  options: { icon: string; title: string }[]
  /**
   * onChange of horizontal menu
   */
  onChange?: (selectedItem: number) => void
  /**
   * onclick of horizontal menu
   */
  onclick?: () => void
}
