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
}


// Components props

export interface IQuestionnaire {
  questions: IQuestion[]
}

export interface IQuestionnaireAnswer {
  questionWithAnswer: IQuestionWithAnswer;
  onChange: (answer: TSendQuestion) => void;
}
