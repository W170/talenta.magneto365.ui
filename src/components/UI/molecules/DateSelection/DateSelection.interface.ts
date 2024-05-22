import { IOptionValues } from '@components/UI/atoms'

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
  disabled?: boolean
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
  /*
   */
  initialValue: string | number | null
}
