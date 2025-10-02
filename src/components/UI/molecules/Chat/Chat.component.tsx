import React, { useImperativeHandle, useReducer } from 'react'
import { chatReducer } from './Chat.reducer'
import type { IChat } from './Chat.interface'
import LoadingDots from './children/LoadingDots/LoadingDots.component'
import { Message } from './children/Message/Message.component'

const Component = React.forwardRef<IChat.Methods, IChat>(({ initialMessages = [], children, ...rest }, ref) => {
  const [state, dispatch] = useReducer(chatReducer, { messages: initialMessages })

  useImperativeHandle(
    ref,
    () => ({
      pushMessage: (message: IChat.Message) => dispatch({ type: 'PUSH_MESSAGE', payload: message }),
      updateMessage: (message: IChat.Message) => dispatch({ type: 'UPDATE_MESSAGE', payload: message }),
      clear: () => dispatch({ type: 'CLEAR_MESSAGES' }),
      snapshot: () => state.messages
    }),
    [state.messages]
  )

  return <div {...rest}>{children?.({ messages: state.messages })}</div>
})

Component.displayName = 'Chat'

/**
 * This is a Chat Component API that allows you to create a chat interface with messages.
 * It uses a reducer to manage the state of messages and provides methods to push and update messages.
 */
export const Chat = Object.assign(Component, {
  LoadingDots,
  Message
})
