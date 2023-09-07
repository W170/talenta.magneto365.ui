import { ISkill } from '../../atoms/Skill'
export interface IJobSkillsCard {
  /**
   * The header or title for the job skills card section.
   */
  offerSkillsLabel: string
  /**
   * An array of skills representing the skills required or preferred for the job.
   */
  offerSkills: ISkill[] | null | undefined
}
