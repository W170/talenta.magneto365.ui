import { ISkill } from '../../atoms/Skill'
export interface IJobSkillsCard {
  /**
   * The header or title for the job skills card section.
   */
  jobSkillCardHeader: string
  /**
   * An array of skills representing the skills required or preferred for the job.
   */
  jobSkills: ISkill[] | null | undefined
}
