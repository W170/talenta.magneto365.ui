export interface IOneSelectionentry {
  placeholder: string
  dropDownTitle: string
  listOptions: IListOption[]
  selectedValue?: number | null
  onChange: (value: number) => void
}

export interface IListOption {
  id: number
  label: string
  shortLabel?: string
  order?: number
}
