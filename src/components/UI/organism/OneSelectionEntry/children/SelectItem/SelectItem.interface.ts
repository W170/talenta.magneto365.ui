export interface ISelectItem {
  text: string
  disable?: boolean
  onClick: () => void
  selected?: boolean
}
