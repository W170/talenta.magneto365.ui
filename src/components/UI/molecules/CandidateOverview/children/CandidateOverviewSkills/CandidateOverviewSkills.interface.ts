import { ICandidateOverviewBaseProps } from '../../CandidateOverview.interface'
import { ISkill } from '@/components/UI/atoms'

export interface ICandidateOverviewSkillsProps extends ICandidateOverviewBaseProps {
  /**
   * Array of skills
   */
  children?: ISkill[]
}
