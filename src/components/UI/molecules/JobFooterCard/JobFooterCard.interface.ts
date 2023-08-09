import { IListIcon } from '../ListIconLink'
export interface IJobFooterCard {
  /**
   * The header or title for the job footer card section.
   */
  jobFooterHeader: string
  /**
   * The URL of the company image to display in the job footer.
   */
  jobFooterCompanyImg: string
  /**
   * The alternative text for the company image in the job footer.
   * (Optional property)
   */
  companyImgAlt?: string
  /**
   * An array of list icons representing footer links for the job listing.
   */
  jobFooterLinks: IListIcon[]
}
