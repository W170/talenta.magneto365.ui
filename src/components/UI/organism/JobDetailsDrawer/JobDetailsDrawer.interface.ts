import { IJobSkillsCard } from '../../molecules/JobSkillsCard'
import { IJobApplyCard } from '../../molecules/JobApplyCard'
import { IJobFooterCard } from '../../molecules/JobFooterCard'
import { IJobDetailCard } from '../../molecules/JobDetailCard'
import { IJobCompanyHeader } from '@components/UI/molecules/JobCompanyHeader'
import { IJobsActions } from '@components/UI/molecules/JobActions'
import { ReactNode } from 'react'
export interface IJobDetailsDrawer {
  /**
   * Props for the job company logo and header section.
   */
  jobCompanyLogoProps: IJobCompanyHeader
  /**
   * Props for the actions section associated with the job details.
   */
  jobActionsProps: IJobsActions
  /**
   * Array of strings representing the job details to display.
   */
  jobDetailsProps: (string | null | undefined)[] | null
  /**
   * Props for the job detail card.
   */
  jobDetailCardProps: IJobDetailCard
  /**
   * Props for the job skills card section. Can be null if no skills card is present.
   */
  jobSkillsCardProps: IJobSkillsCard
  /**
   * Props for the job apply card section.
   */
  jobApplyCardProps: IJobApplyCard
  /**
   * Props for the job footer card section.
   */
  jobFooterCardProps: IJobFooterCard
  /**
   * Specifies whether the component is in a loading state.
   * (Optional property)
   */
  isLoading?: boolean
  /**
   *
   */
  modalPendingInfoComponent?: ReactNode
}
