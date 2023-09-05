export interface IJobCard {
  id?: string | number | null
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
  companyName?: string | null
  /**
   * title
   */
  title?: string | null
  /**
   * education level
   */
  educationLevel?: string | null
  /**
   * date vacant creation
   */
  formatPublishDate?: string | null
  /**
   * company image
   */
  companyLogo?: string | null
  /**
   * company slug
   */
  companySlug?: string | null
  /**
   * number of months of experience
   */
  experience?: string | null
  /**
   * type of contract
   */
  contractType?: string | null
  /**
   * others cities text
   */
  others?: string
  /**
   * this function show job detail
   */
  showDetail?: () => void
}
