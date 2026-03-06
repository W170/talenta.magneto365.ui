import { ISearchInput } from '@components/UI/atoms/InputSearch/InputSearch.interface'
import { IListOption } from '../../MultipleSelectionEntry.interface'

export interface IContainerOptions {
  inputSearchProps?: ISearchInput
  selectedValues: IListOption[]
  listOptions: IListOption[]
  removeValueToArray: (value: IListOption) => void
  addValueToArray: (value: IListOption) => void
  numberOfSelectable: number
  dropDownTitle: string
  clickOut?: boolean
  setClickOut?: React.Dispatch<React.SetStateAction<boolean>>
}
