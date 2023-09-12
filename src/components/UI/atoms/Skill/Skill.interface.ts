export interface ISkill {
  /**
   * The unique identifier for the skill, can be a number or null.
   */
  id: number | null
  /**
   * The name or description of the skill, can be a string or null.
   */
  name: string | null
  /**
   * The score or proficiency level of the skill, can be a number or null.
   */
  score: number | null
}
