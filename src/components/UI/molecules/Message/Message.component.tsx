import React, { FC, Fragment, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { initialState, iconByType } from './constants'
import { IMessage } from './Message.interface'
import styles from './Message.module.scss'

export const Message: FC<IMessage> = (props) => {
  const [{ text, type = 'info', duration = 3000 }, setContent] = useState<IMessage>({ ...initialState, ...props })
  const messageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setTimeout(() => setContent(initialState), duration)
  }, [duration])

  useEffect(() => {
    if (!messageRef.current) return
    const exitDuration = `${(duration - 500) / 1000}s`
    messageRef.current.style.setProperty('--default-duration', exitDuration)
  }, [duration])

  return (
    <Fragment>
      {text &&
        ReactDOM.createPortal(
          <div ref={messageRef} className={`${styles.container} ${styles.show}`}>
            <img src={iconByType[type]} className={styles.icon} alt={type} />
            {text}
          </div>,
          document.body
        )}
    </Fragment>
  )
}

export const message = (props: IMessage) => {
  if (!document) return
  const container = document.createElement('div')
  document.body.appendChild(container)
  ReactDOM.render(<Message {...props} />, container)
  const duration = props.duration ? props.duration : initialState.duration
  setTimeout(() => document.body.removeChild(container), duration)
}
