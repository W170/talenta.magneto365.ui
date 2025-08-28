export interface IGlobalQuestionProps {
  /**
   * The question to be displayed
   */
  question: IQuestion
  /**
   * The text to be displayed in the error message
   */
  errorText: string
  /**
   * Index of the question (optional, will use context if not provided)
   */
  idx?: number
}

export interface IQuestion {
  /**
   * Unique identifier for the question
   */
  id: string
  /**
   * The text of the question
   */
  text: string
  /**
   * The type of the question: single, multiple, or text
   */
  type: 'single' | 'multiple' | 'text'
  /**
   * Array of options for the question, if any
   */
  options?: IQuestionOptions[]
}

export interface IQuestionOptions {
  /**
   * Unique identifier for the option
   */
  id: number
  /**
   * The text of the option
   */
  label: string
}

export type AnswerType = string | IQuestionOptions | IQuestionOptions[]

export interface QuestionTypeValidators {
  [key: string]: (answer: AnswerType) => boolean
}
