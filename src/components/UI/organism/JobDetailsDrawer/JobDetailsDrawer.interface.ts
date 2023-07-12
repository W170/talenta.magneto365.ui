import { IJobHeaderCard } from '../../molecules/JobHeaderCard'
import { IJobDetail } from '../../molecules/JobDetails'
import { IJobSkillsCard } from '../../molecules/JobSkillsCard'
import { IJobApplyCard } from '../../molecules/JobApplyCard'
import { IJobFooterCard } from '../../molecules/JobFooterCard'
import { IJobDetailCard } from '../../molecules/JobDetailCard'

export interface IJobDetailsDrawer {
  /**
   *
   */
  jobHeaderCardProps: IJobHeaderCard
  /**
   *
   */
  jobDetailsProps: IJobDetail
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
