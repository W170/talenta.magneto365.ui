import React, { FC, useEffect, useRef, useState, useMemo, useCallback } from 'react'
import ReactDOM from 'react-dom'
import { initialState, iconByType, transitionDuration } from './constants'
import CNM from '@utils/classNameManager/classNameManager.util'
import { IMessage } from './Message.interface'
import styles from './Message.module.scss'

export const Message: FC<IMessage> = ({ description, duration = 3000, text, type = 'info' }) => {
  const [toggleAnimation, setToggleAnimation] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(true)

  const removeTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const messageRef = useRef<HTMLDivElement>(null)

  const containerStyles = useMemo(
    () =>
      CNM.get({
        styles,
        cls: [
          'message__container',
          `message__container--${toggleAnimation ? 'show' : 'hidden'}`,
          `message__container--${type}`
        ]
      }),
    [type, toggleAnimation]
  )

  const textStyles = useCallback(
    (bold?: boolean) => CNM.get({ styles, cls: ['message__text', bold && 'message__text--bold'] }),
    []
  )

  useEffect(() => {
    hideTimeoutRef.current = setTimeout(() => {
      setToggleAnimation(false)
    }, duration)

    removeTimeoutRef.current = setTimeout(() => {
      setVisible(false)
    }, duration + transitionDuration)

    return () => {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
      if (removeTimeoutRef.current) clearTimeout(removeTimeoutRef.current)
    }
  }, [duration])

  useEffect(() => {
    if (!messageRef.current) return
    const exitDuration = `${transitionDuration / 1000}s`
    messageRef.current.style.setProperty('--transition-duration', exitDuration)

    setTimeout(() => {
      setToggleAnimation(true)
    }, 10)
  }, [])

  return visible
    ? ReactDOM.createPortal(
        <div ref={messageRef} className={containerStyles}>
          <img src={iconByType[type]} className={styles.icon} alt={type} />
          <div>
            {text && <span className={textStyles(!!description)}>{text}</span>}
            {description && <span className={textStyles()}>{description}</span>}
          </div>
        </div>,
        document.body
      )
    : null
}

export const message = (props: IMessage) => {
  const idMessageDiv = 'magneto-ui-message'
  if (!document) return
  const messageActive = document.querySelector(`#${idMessageDiv}`)
  if (messageActive) return
  const container = document.createElement('div')
  container.setAttribute('id', idMessageDiv)
  document.body.appendChild(container)
  ReactDOM.render(<Message {...props} />, container)
  const duration = props.duration ? props.duration : initialState.duration
  setTimeout(() => {
    ReactDOM.unmountComponentAtNode(container)
    document.body.removeChild(container)
  }, (duration || 0) + transitionDuration)
}
