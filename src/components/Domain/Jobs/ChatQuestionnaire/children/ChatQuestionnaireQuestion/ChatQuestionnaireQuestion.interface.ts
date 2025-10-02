import { IQuestionWithAnswer } from "../../ChatQuestionnaire.interface"

export interface IChatQuestionnaireQuestion {
  className?: string
  children?: React.ReactNode
  questionWithAnswer: IQuestionWithAnswer
}
