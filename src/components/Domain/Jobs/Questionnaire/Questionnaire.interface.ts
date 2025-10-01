import { IChat } from "@components/UI/molecules/Chat"

export enum EQuestionType {
  unique,
  multiple,
  openShort,
  openLong
}

export interface IPossibleAnswer {
  id: number
  label: string
}

export type IQuestion = {
  id: number
  titleQuestion: string
  caption?: string
  answerType: EQuestionType
  possibleAnswers: IPossibleAnswer[]
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
  question: IQuestion
  answer?: TSendQuestion
  mode: 'editing' | 'readonly'
}


// Components props

export interface IQuestionnaireMessage extends IChat.Message {
  content: IQuestionWithAnswer;
}

export interface IQuestionnaire {
  className?: string
  children?: (messages: IQuestionnaireMessage[]) => React.ReactNode
}

export interface IQuestionnaireAnswer {
  questionWithAnswer: IQuestionWithAnswer;
  onChange: (answer: IQuestionWithAnswer) => void;
}
