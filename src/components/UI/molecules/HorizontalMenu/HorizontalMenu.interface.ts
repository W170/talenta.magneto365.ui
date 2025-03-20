export interface IHorizontalMenu {
  /**
   * Class name of horizontal menu
   */
  className?: string
  /**
   * options of horizontal menu
   */
  options: IHorizontalMenuOption[]
  /**
   * onChange of horizontal menu
   */
  onChange?: (selectedItem: number) => void
  /**
   * onClick of horizontal menu
   */
  onClick?: () => void
}

export interface IHorizontalMenuOption {
  icon: React.ReactNode
  title: string
}
