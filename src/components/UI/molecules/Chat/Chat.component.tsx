import React, { useImperativeHandle, useReducer } from 'react'
import { chatReducer } from './Chat.reducer'
import type { IChat } from './Chat.interface'

export const Chat = React.forwardRef<IChat.Methods, IChat>(({ initialMessages = [], children, ...rest }, ref) => {
  const [state, dispatch] = useReducer(chatReducer, { messages: initialMessages })

  useImperativeHandle(
    ref,
    () => ({
      pushMessage: (message: IChat.Message) => dispatch({ type: 'PUSH_MESSAGE', payload: message }),
      updateMessage: (message: IChat.Message) => dispatch({ type: 'UPDATE_MESSAGE', payload: message })
    }),
    []
  )

  return <div {...rest}>{children?.({ messages: state.messages })}</div>
})

Chat.displayName = 'Chat'
