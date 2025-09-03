import { AnswerType, IQuestion } from '@components/UI/template'

export const validateCurrentStepAnswers = (
  currentStepQuestions: { [key: string]: 'single' | 'multiple' | 'text' },
  answers: { [key: string]: AnswerType }
): boolean => {
  return Object.entries(currentStepQuestions).every(([questionId, questionType]) => {
    const answer = answers[questionId]
    if (questionType === 'multiple') {
      return Array.isArray(answer) && answer.length > 0
    } else if (questionType === 'single') {
      return answer && typeof answer === 'object' && !Array.isArray(answer) && 'id' in answer
    } else if (questionType === 'text') {
      return typeof answer === 'string' && answer.trim().length > 0
    }
    return false
  })
}

export const questionTypeValidators = {
  multiple: (answer: AnswerType) => !Array.isArray(answer) || answer.length === 0,
  single: (answer: AnswerType) => !(answer && typeof answer === 'object' && !Array.isArray(answer) && 'id' in answer),
  text: (answer: AnswerType) => !(typeof answer === 'string' && answer.trim().length > 0)
}

export const isMissingValidator = (answer: AnswerType, question: IQuestion): boolean => {
  const validator = questionTypeValidators[question.type]
  return validator ? validator(answer) : false
}
