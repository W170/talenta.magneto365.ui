import { ICompanyJobHeader } from '../CompanyJobHeader'
import { IJobsActions } from '../JobActions'

export interface IJobHeaderCard {
  /**
   *
   */
  companyJobHeader: ICompanyJobHeader
  /**
   *
   */
  jobActions: IJobsActions
}
