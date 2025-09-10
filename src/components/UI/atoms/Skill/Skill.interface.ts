export interface ISkill {
  className?: string

  classNames?: {
    name?: string
    level?: string
    circle?: string
  }
  /**
   * The name or description of the skill
   */
  name: string
  /**
   * The score or proficiency level of the skill.
   */
  score: number
}
