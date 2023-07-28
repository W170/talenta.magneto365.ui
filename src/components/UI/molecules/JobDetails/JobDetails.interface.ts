export interface IDetailList {
  /**
   * Sets the information of the job details
   */
  detailText?: string
  /**
   * Sets the relevant icon for the job info
   */
  icon?: string
}

export interface IJobDetail {
  /**
   * Props for the job detail list
   */
  jobDetailsList: IDetailList[]
}
