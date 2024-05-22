import { IOptionValues } from '../DateDropdown'

export interface IDateOption {
  optionsList: IOptionValues[]
  /*
   */
  handleOnClick: (optionValue: string | number) => void
  /*
   */
  selected: string | number | null
}
