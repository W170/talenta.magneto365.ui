import { IListOption } from '../../OneSelectionEntry.interface'

export interface IContainerOptions {
  selectedValue?: IListOption
  listOptions: IListOption[]
  addValue: (value: number) => void
  dropDownTitle: string
  responsiveMenu?: boolean
}
