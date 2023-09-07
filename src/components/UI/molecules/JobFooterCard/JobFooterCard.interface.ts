import { IListIcon } from '../ListIconLink'
export interface IJobFooterCard {
  /**
   * The header or title for the job footer card section.
   */
  offerFooterHeader: string
  /**
   * The URL of the company image to display in the job footer.
   */
  offerCompanyLogo: string
  /**
   * The alternative text for the company image in the job footer.
   * (Optional property)
   */
  companyImgAlt?: string
  /**
   * An array of list icons representing footer links for the job listing.
   */
  offerFooterLinks: IListIcon[]
}
