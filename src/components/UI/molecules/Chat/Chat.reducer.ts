import { IChat } from './Chat.interface'

export const chatReducer = (state: IChat.ReducerState, action: IChat.ReducerActions): IChat.ReducerState => {
  switch (action.type) {
    case 'PUSH_MESSAGE':
      return { ...state, messages: [...state.messages, action.payload] }
    case 'UPDATE_MESSAGE':
      return { ...state, messages: state.messages.map((msg) => (msg.id === action.payload.id ? action.payload : msg)) }
  }
}
