import { IJobCompanyLogo } from '@components/Domain/Jobs/JobCompanyLogo'
import { IJobHeader } from '@components/UI/atoms'
import { IJobsActions } from '@components/UI/molecules/JobActions'

export interface IJobCompanyHeader {
  /**
   * Props for the company logo in the job company header.
   */
  jobCompanyLogoProps: IJobCompanyLogo
  /**
   * Props for the header of the job listing in the job company header.
   */
  jobHeaderProps: IJobHeader

  isApplied?: boolean
  /**
   * Props for the actions section associated with the job details.
   */
  jobActionsProps?: IJobsActions
}
