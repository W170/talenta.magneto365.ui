import ReactDOM from 'react-dom'
import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react'
import CNM from '@utils/classNameManager/classNameManager.util'
import { iconByType, transitionDuration } from './constants'
import { IMessageProps } from './Message.interface'
import styles from './Message.module.scss'

export const Component: React.FC<IMessageProps> = ({
  description,
  duration = 3000,
  onHide,
  text,
  type = 'info',
  visible = true
}) => {
  const [toggleAnimation, setToggleAnimation] = useState<boolean>(false)
  const [localVisible, setLocalVisible] = useState<boolean>(visible)
  const [isAnimating, setIsAnimating] = useState<boolean>(false)
  const removeTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const containerVar = useMemo(
    () => ({
      '--transition-duration': `${transitionDuration / 1000}s`
    }),
    []
  )

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
    if (!localVisible) return

    hideTimeoutRef.current = setTimeout(() => {
      setToggleAnimation(false)
    }, duration)

    removeTimeoutRef.current = setTimeout(() => {
      setLocalVisible(false)
      onHide?.(false)
    }, duration + transitionDuration)

    return () => {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
      if (removeTimeoutRef.current) clearTimeout(removeTimeoutRef.current)
    }
  }, [duration, localVisible, onHide])

  useEffect(() => {
    if (!localVisible) return

    setTimeout(() => {
      setToggleAnimation(true)
    }, 10)
  }, [localVisible])

  useEffect(() => {
    if ((!visible && !isAnimating) || (visible && isAnimating)) return

    setLocalVisible(visible)
    setIsAnimating(visible)
  }, [isAnimating, visible])

  return localVisible
    ? ReactDOM.createPortal(
        <div className={containerStyles} style={containerVar as React.CSSProperties}>
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

/**
 * Molecule UI component for Message
 */
export const Message = Component
