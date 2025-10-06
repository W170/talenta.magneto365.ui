import { IQuestionnaireAnswer } from "../../ChatQuestionnaire.interface"

export interface IChatQuestionnaireUniqueChoice extends IQuestionnaireAnswer {
  className?: string
  classNames?: {
    answers?: string
    option: string
  }
}
