export interface IText {
  /**
   * This is the main text
   * */
  text?: string
  /**
   * This is the custom text
   * */
  customText?: ICustomText[]
  /**
   * You can add you custom className here
   */
  className?: string
}

export interface ICustomText {
  /**
   * This is the value to the custom text
   * */
  value: string
  /**
   * This is the custom font weight to text
   * */
  fontWeight: EFontWeightType
  /**
   * This is the custom line break to text
   * */
  lineBreak?: boolean
}

export type EFontWeightType = 'normal' | 'bold' | 'lighter'
