import { IInput } from '../../../../molecules/Input/Input.interface'
import { ISelect, IValueSelect } from '../../Select.interface'

export interface ISelectInput<T> extends Omit<IInput, 'onChange' | 'value' | 'placeholder' | 'type'> {
  /**
   * input value.
   */
  value?: IInput['value']
  /**
   * event to request change.
   */
  onChange?: IInput['onChange']
  /**
   * placeholder for input.
   */
  placeholder?: IInput['placeholder']
  /**
   * type for input.
   */
  type?: IInput['type']

  /**
   * to know if the select is open.
   */
  open?: boolean

  /**
   * select value.
   */
  selected?: ISelect<T>['value']

  /**
   * onClick on input container.
   */
  onClick?: () => void

  /**
   * display values selected in input.
   */
  readonly?: boolean

  /**
   * The select value is generic, so for display correctly the label in input
   * use this function.
   * @param value current values selected
   * @default (value) => value.map(select => select.value).join(', ')
   * @returns
   */
  getLabel?: (value: IValueSelect<T>[]) => string
}
