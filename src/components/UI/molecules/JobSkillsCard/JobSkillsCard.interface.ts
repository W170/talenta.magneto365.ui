import { ISkill } from '../../atoms/Skill'

export interface IJobSkillsCard {
  /**
   * Sets the job skill heading
   */
  jobSkillCardHeader: string
  /**
   * Props for the job skills of the job detail
   */
  jobSkills: ISkill[]
}
