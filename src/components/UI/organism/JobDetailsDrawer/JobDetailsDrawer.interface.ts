import { IJobSkillsCard } from '../../molecules/JobSkillsCard'
import { IJobApplyCard } from '../../molecules/JobApplyCard'
import { IJobFooterCard } from '../../molecules/JobFooterCard'
import { IJobDetailCard } from '../../molecules/JobDetailCard'
import { IJobCompanyHeader } from '@components/UI/molecules/JobCompanyHeader'
import { IJobsActions } from '@components/UI/molecules/JobActions'

export interface IJobDetailsDrawer {
  /**
   *
   */
  jobCompanyLogoProps: IJobCompanyHeader
  /**
   *
   */
  jobActionsProps: IJobsActions
  /**
   *
   */
  jobDetailsProps: string[]
  /**
   *
   */
  jobDetailCard: IJobDetailCard[]
  /**
   *
   */
  jobSkillsCardProps: IJobSkillsCard
  /**
   *
   */
  jobApplyCardProps: IJobApplyCard
  /**
   *
   */
  jobFooterCardProps: IJobFooterCard
}
