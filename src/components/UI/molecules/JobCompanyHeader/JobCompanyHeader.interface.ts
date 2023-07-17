import { IJobCompanyLogo, IJobHeader } from '../../atoms'

export interface IJobCompanyHeader {
  /**
   * Props for the company logo
   */
  jobCompanyLogoProps: IJobCompanyLogo
  /**
   * Props for the job header
   */
  jobHeaderProps: IJobHeader
}
