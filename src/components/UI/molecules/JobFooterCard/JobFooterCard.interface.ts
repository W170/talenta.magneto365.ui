import { IListIcon } from '../ListIconLink'

export interface IJobFooterCard {
  /**
   *
   */
  jobFooterHeader: string
  /**
   *
   */
  jobFooterCompanyImg: string
  /**
   *
   */
  companyImgAlt?: string
  /**
   *
   */
  jobFooterLinks: IListIcon[]
}
