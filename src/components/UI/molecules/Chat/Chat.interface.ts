/* eslint-disable @typescript-eslint/no-namespace */

export interface IChat extends React.HTMLAttributes<HTMLDivElement> {
  initialMessages?: IChat.Message[]
  children?: (props: IChat.ChildrenPayload) => React.ReactNode
}

export namespace IChat {
  export interface Methods {
    pushMessage: (message: IChat.Message) => void
    updateMessage: (message: IChat.Message) => void
    snapshot: () => IChat.Message[]
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
    type: string | number
    content: React.ReactNode
  }
}
