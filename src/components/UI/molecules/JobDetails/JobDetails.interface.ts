export interface IDetailList {
  /**
   * Sets the information of the job details
   */
  detailText?: string
  /**
   * Sets the relevant icon for the job info
   */
  Icon?: string
}

export interface IJobDetails {
  /**
   * Props for the job detail list
   */
  detailsTextList: string[]
  /**
   * Props for the icons for the detail list
   */
  iconList?: string[]
}
