export interface IDateOption {
  optionsList: IOptionValues[]
  /*
   */
  handleOnClick: (optionValue: string | number) => void
  /*
   */
  selected: string | number | null
}

export interface IOptionValues {
  /**
   * The value of the option.
   */
  optionValue: string | number
  /**
   * The label to display for the option.
   */
  optionLabel: string
}
