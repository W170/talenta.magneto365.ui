type SkillLevel = 'Basic' | 'Intermediate' | 'Advanced' | 'Professional'

export interface ISkill {
  /**
   * Sets the skill text
   */
  skillText: string
  /**
   * Sets the skill level into 4 different options
   */
  skillLevel: SkillLevel
}
