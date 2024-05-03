import { IOptionValues } from '@components/UI/atoms/DateOptions'

export interface IDateSelection {
  /*
   */
  applyLabel: string
  /*
   */
  cancelLabel: string
  /*
   */
  dateOptions: IOptionValues[]
  /*
   */
  isOpen: boolean
  /*
   */
  onClose: () => void
  /*
   */
  onApplyCallback: (optionValue: string | number | null) => void
  /*
   */
  selectionHeader: string
}
