import { IJobCompanyLogo, IJobHeader } from '@components/UI/atoms'

export interface IJobCompanyHeader {
  /**
   * Props for the company logo in the job company header.
   */
  jobCompanyLogoProps: IJobCompanyLogo
  /**
   * Props for the header of the job listing in the job company header.
   */
  jobHeaderProps: IJobHeader
}
