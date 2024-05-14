export interface ICreatePaginationProps {
  /**
   * This is the total of vacancies
   */
  total: number
  /**
   *  This is the number of the currently selected page
   */
  current: number
  /**
   * This is the number of vacancies per page
   */
  pageSize: number
  /**
   * This is the number of buttons that show in the paginator
   */
  numberOfButtons?: number
}

export interface IPaginationProps extends ICreatePaginationProps {
  /**
   *  This is the flag when the filters promise is pending
   */
  loading: boolean
  /**
   * This is function that changes the current page
   */
  onChange: (page: number, pageSize: number) => void
  /**
   * This is the text that will be displayed in the attribute title of the first button
   */
  prevTitle?: string
  /**
   * This is the text that will be displayed in the attribute title of the last button
   */
  nextTitle?: string
}

export interface ICreatePaginationResult {
  /**
   * This is the total of buttons that will be displayed
   */
  buttons: number[]
  /**
   * This is the number of the currently selected page
   */
  current: number
  /**
   * This is the number of the fist button that will be displayed
   */
  first: number
  /**
   * This is the number of the last button that will be displayed
   */
  last: number
}

export interface IBtnPaginationProps {
  /**
   * This is the flag when the filters promise is pending
   */
  loading: boolean
  /**
   * This is the value of the button
   */
  value?: number
  /**
   * This is the number of the currently selected page
   */
  current?: number
  /**
   * This is the text that will be displayed in the attribute title of the button
   */
  text?: string
  /**
   * This is the icon that will be can displayed in the button
   */
  icon?: string | null
  /**
   * This is the function that will be called in the on-click event of the button
   */
  onClick: () => void
  /**
   * This is the dynamic url that google robots will use to navigate with simple anchors
   */
  dynamicPaginationUrl?: string
}
