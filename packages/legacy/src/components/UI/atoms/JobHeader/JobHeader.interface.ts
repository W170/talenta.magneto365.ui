export interface IJobHeader {
  /**
   * The title of the job.
   * (Optional property)
   */
  offerTitle?: string
  /**
   * The subtitle or additional information about the job.
   * (Optional property)
   */
  offerCompanyName?: string
  /**
   * The optional company url to see his vacancies.
   */
  offerCompanyLink?: string
  /**
   * Specifies whether the job header is hidden or visible.
   * (Optional property)
   */
  isHidden?: boolean

  /**
   * Specifies what type of title it is, MainTitle or SubTitle
   * (Optional property)
   */
  typeTitle?: 'MainTitle' | 'SubTitle' | undefined
}
