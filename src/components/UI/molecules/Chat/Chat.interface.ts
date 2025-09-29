/* eslint-disable @typescript-eslint/no-namespace */

export interface IChat extends React.HTMLAttributes<HTMLDivElement> {
  initialMessages?: IChat.Message[]
  children?: (props: IChat.ChildrenPayload) => React.ReactNode
}

export namespace IChat {
  export interface Methods {
    pushMessage: (message: IChat.Message) => void
    updateMessage: (message: IChat.Message) => void
  }

  export interface ReducerState {
    messages: IChat.Message[]
  }

  export type ReducerActions = {
    type: 'PUSH_MESSAGE' | 'UPDATE_MESSAGE'
    payload: IChat.Message
  }

  export interface ChildrenPayload {
    messages: IChat.Message[]
  }

  export interface Message {
    id: string | number
    sender: string
    type: string
    content: React.ReactNode
  }
}

export type TPossibleAnswer = {
  id: number
  label: string
}

export type TSendCloseQuestion = {
  type: string
  id: number
  answer: number[]
}

export type TCloseAnswers = {
  buttonContinueText: string
  possibleAnswers: TPossibleAnswer[]
  idQuestion: number
  answersSelected: number[]
  type: 'multiple' | 'unique'
  className?: {
    answers?: string
    option: string
  }
  onChange: (answers: TSendCloseQuestion) => void
  onCloseAnswers: () => void
}
