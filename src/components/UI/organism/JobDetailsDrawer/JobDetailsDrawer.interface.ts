import { IJobHeaderCard } from '../../molecules/JobHeaderCard'
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
