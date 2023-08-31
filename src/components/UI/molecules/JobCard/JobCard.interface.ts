export interface IJobCard {
  id: string | number
  /**
   * this property can change style in the texts when the job was seen
   */
  wasSeen?: boolean
  /**
   * this property can change style in the texts when the job is open
   */
  isActive?: boolean
  /**
   * this property can change style in the texts when the job is open
   */
  isCompanyPage?: boolean
  /**
   * cities of vacant
   */
  cities?: string[]
  /**
   * salary value
   */
  salary?: number | string

  /**
   * company name
   */
  companyName?: string
  /**
   * title
   */
  title?: string
  /**
   * education level
   */
  educationLevel?: string
  /**
   * date vacant creation
   */
  publishDate?: string
  /**
   * company image
   */
  companyLogo?: string
  /**
   * company slug
   */
  companySlug?: string
  /**
   * number of months of experience
   */
  experience?: string
  /**
   * type of contract
   */
  contractType?: string
  /**
   * others cities text
   */
  others?: string
  /**
   * this function show job detail
   */
  showDetail?: () => void
}
