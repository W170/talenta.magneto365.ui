export interface IMultipleSelectionentry {
  placeholder: string
  dropDownTitle: string
  listOptions: IListOption[]
  numberOfSelectable?: number
  selectedValues?: number[]
  onChange: (value: IListOption[]) => void
}

export interface IListOption {
  id: number
  name: string
}
