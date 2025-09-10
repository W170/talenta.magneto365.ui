export interface ISimilarJobsCard {
  id?: number | null
  title: string
  /**
   * Salary is just a string so that covering the following cases: salary value, salary range, and label for unknown salary.
   */
  salary: string | null
  /**
   * @deprecated is not being used for now.
   */
  toAgree: boolean | null
  cities: string[]
  jobUrlSlug: string
  /**
   * @deprecated is not used in the new prototypes.
   */
  experience: string | null
  companyLogo: string | null
  companyName?: string | null
  /**
   * Label for contractType
   */
  contractType?: string | null
  /**
   * Label for number of quotas that has the vacancy.
   * @example '5 cupos'
   */
  quotas?: string | null
  hideLogo?: boolean
}
