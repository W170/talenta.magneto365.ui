import { ISimilarJobsCard } from '@components/UI/molecules/SimilarJobsCard/SimilarJobsCard.interface'

export interface ISimilarJobs {
  /**
   * this is the title in the top
   * @deprecated is not used.
   */
  sectionTitle?: string
  /**
   * this is the link text
   * @deprecated is not used.
   */
  moreJobsText?: string
  /**
   * this is the link text
   * @deprecated is not used.
   */
  moreJobsLink?: string
  /**
   * this property hide the image
   */
  hideLogo?: boolean
  /**
   * these are similar jobs cards values
   */
  similarJobsCard: ISimilarJobsCard[]
}
