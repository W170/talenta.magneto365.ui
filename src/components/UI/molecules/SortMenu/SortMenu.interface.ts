export interface ISortMenuItem {
  /**
   * this is the key for set the filter
   */
  field: string
  /**
   * this is the text for the menu options
   */
  label: string
  /**
   * this is the url to set the icon
   */
  iconUrl?: string
}

export interface ISortMenu {
  /**
   * This is an array with the menu options
   */
  orderFields: ISortMenuItem[]
  /**
   * This is the text that the button shows
   */
  textOrderFilter: string
  /**
   * This function change the filter with the selected option
   */
  setFilter: (menuItem: { key: string }) => void
  /**
   * This property show and hide the content
   */
  clickOut?: boolean
  /**
   * This function change clickout value between true and false
   */
  setClickOut?: React.Dispatch<React.SetStateAction<boolean>>
  /**
   * With this property you can disabled the button
   */
  loading: boolean
}
