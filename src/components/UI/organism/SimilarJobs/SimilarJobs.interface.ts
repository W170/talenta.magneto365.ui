import { ISimilarJobsCard } from '@components/UI/molecules/SimilarJobsCard/SimilarJobsCard.interface'

export interface ISimilarJobs {
  /**
   * this is the title in the top
   */
  sectionTitle: string
  /**
   * this is the link text
   */
  moreJobsText: string
  /**
   * this is the link text
   */
  moreJobsLink: string
  /**
   * this property hide the image
   */
  hideLogo: boolean
  /**
   * these are similar jobs cards values
   */
  similarJobsCard: ISimilarJobsCard[]
}
