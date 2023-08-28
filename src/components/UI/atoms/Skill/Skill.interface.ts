type SkillLevel = 'Basic' | 'Intermediate' | 'Advanced' | 'Professional'

export interface ISkill {
  /**
   * The text representing the skill's name or description.
   */
  skillText: string
  /**
   * The level of proficiency for the skill, which can be one of the predefined types:
   * 'Basic', 'Intermediate', 'Advanced', or 'Professional'.
   */
  skillLevel: SkillLevel
}
