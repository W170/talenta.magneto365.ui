export interface IScoreLevel {
  /**
   * this property sets the name card
   */
  name: string
  /**
   * this fuction returns the name and score selected
   */
  onChange: ({ name, level, id }: { name: string; level: number; id?: number }) => void
  /**
   * this property returns the name selected for deletion
   */
  removeSkill: (name: string) => void
  /**
   * this property can sets the default value
   */
  scoreValue?: number
  /**
   * this property sets the levels
   */
  levels: string[]
  /**
   * this property can change the default color
   */
  color?: string
  /**
   * this property sets the id
   */
  id?: number
}
