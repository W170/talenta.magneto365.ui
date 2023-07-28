export interface IDetailList {
  /**
   * The text content of the detail item.
   * (Optional property)
   */
  detailText?: string
  /**
   * The icon associated with the detail item.
   * (Optional property)
   */
  Icon?: string
}

export interface IJobDetails {
  /**
   * An array of strings representing the list of job details.
   */
  detailsTextList: string[]
  /**
   * An array of strings representing the icons associated with each job detail.
   * (Optional property)
   */
  iconList?: string[]
}
