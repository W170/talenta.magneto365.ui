import { AnswerType } from './children/GlobalQuestion'

export interface IFormHandlerContext {
  answers: { [key: string]: AnswerType }
  submitted: boolean
  handleChange: (questionId: string, value: AnswerType) => void
  setSubmitted: (value: boolean) => void
  currentStepQuestions: { [key: string]: 'single' | 'multiple' | 'text' }
  registerQuestion: (questionId: string, questionType: 'single' | 'multiple' | 'text') => void
  unregisterQuestion: (questionId: string) => void
}
