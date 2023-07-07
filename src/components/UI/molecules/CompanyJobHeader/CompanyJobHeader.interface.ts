import { ICompanyLogo, IJobHeader } from '../../atoms'

export interface ICompanyJobHeader {
  /**
   * Props for the company logo
   */
  companyLogoProps: ICompanyLogo
  /**
   * Props for the job header
   */
  jobHeaderProps: IJobHeader
}
