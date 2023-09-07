export interface IDetailList {
  /**
   * The text content of the detail item.
   * (Optional property)
   */
  offerDetailText: string
  /**
   * The icon associated with the detail item.
   * (Optional property)
   */
  icon: string
}

export interface IJobDetails {
  /**
   * An array of strings representing the list of job details.
   */
  offerDetailsList: string[]
  /**
   * An array of strings representing the icons associated with each job detail.
   * (Optional property)
   */
  iconList: string[]
}
