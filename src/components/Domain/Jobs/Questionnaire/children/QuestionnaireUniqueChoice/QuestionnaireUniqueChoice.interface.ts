import { IQuestionnaireAnswer } from "../../Questionnaire.interface"

export interface IQuestionnaireUniqueChoice extends IQuestionnaireAnswer {
  className?: string
  classNames?: {
    answers?: string
    option: string
  }
}
