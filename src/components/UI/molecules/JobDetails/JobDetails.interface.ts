import { ICityDetail } from '../CitiesDetailDrawer'

export interface IDetailList {
  /**
   * The text content of the detail item.
   * (Optional property)
   */
  offerDetailText?: string | null
  /**
   * The icon associated with the detail item.
   * (Optional property)
   */
  icon?: string | null
  /**
   * This array contains the list of icons text alternatives
   */
  alt?: string | null
}

export interface IJobDetails {
  /**
   * An array of strings representing the list of job details.
   */
  offerDetailsList: (string | null | undefined)[]
  /**
   * An array of strings representing the icons associated with each job detail.
   * (Optional property)
   */
  iconList?: string[]
  /**
   * This array contains the list of icons text alternatives
   */
  altList?: string[]

  /**
   * This array contains the list of cities and his url
   */
  cities: ICityDetail[]
}
