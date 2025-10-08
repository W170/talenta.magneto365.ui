import { IChat } from '@components/UI/molecules/Chat'

export enum EQuestionType {
  unique,
  multiple,
  openShort,
  openLong
}

export interface IPossibleAnswer {
  id: number
  titleAnswer: string
}

export type IQuestion = {
  id: number
  titleQuestion: string
  caption?: string
  answerType: EQuestionType
  possibleAnswers: IPossibleAnswer[]
}

export type TQuestionnaires = {
  id: number
  questions: IQuestion[]
}

export type TSendOpenQuestion = {
  type: EQuestionType.openShort | EQuestionType.openLong
  id: number
  openAnswer: string
}

export type TSendCloseQuestion = {
  type: EQuestionType.multiple | EQuestionType.unique
  id: number
  answer: { id: number; label: string }[]
}

export type TSendQuestion = TSendCloseQuestion | TSendOpenQuestion

export interface IQuestionWithAnswer {
  questionnaireId: number
  question: IQuestion
  answer?: TSendQuestion
  mode: 'editing' | 'readonly'
}

export type TSendQuestionnaire = {
  id: number
  questions: TSendQuestion[]
}

// Components props

export interface IQuestionnaireMessage extends IChat.Message {
  id: string
  sender: string
  type: EQuestionType
  content: IQuestionWithAnswer
}

export interface IChatQuestionnaire {
  className?: string
  children?: (messages: IQuestionnaireMessage[]) => React.ReactNode
}

export interface IQuestionnaireAnswer {
  className?: string
  questionWithAnswer: IQuestionWithAnswer
  onChange: (answer: IQuestionWithAnswer) => void
}
