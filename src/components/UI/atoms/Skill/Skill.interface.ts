type SkillLevel = 1 | 2 | 3 | 4

export interface ISkill {
  id: number | string
  /**
   * The text representing the skill's name or description.
   */
  name: string
  /**
   * The level of proficiency for the skill, which can be one of the predefined types:
   * 'Basic: 1', 'Intermediate: 2', 'Advanced: 3', or 'Professional: 4'.
   */
  score: SkillLevel
}
