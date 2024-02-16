export interface IOneSelectionentry {
  dropDownTitle: string
  listOptions: IListOption[]
  selectedValue?: number | null
  onChange: (value: number) => void
  responsiveMenu?: boolean
}

export interface IListOption {
  id: number
  label: string
  shortLabel?: string
  order?: number
}
