import ReactDOM from 'react-dom'
import React, { useEffect, useRef, useState, useMemo, useCallback, useContext } from 'react'
import CNM from '@utils/classNameManager/classNameManager.util'
import { ContainerContext } from '@components/context/container/container.context'
import { iconByType, transitionDuration } from './constants'
import { IMessageProps } from './Message.interface'
import styles from './Message.module.scss'
import { IconItem } from '@components/UI/atoms'

export const Component: React.FC<IMessageProps> = ({
  className,
  description,
  duration = 3000,
  iconProps,
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
  const { container } = useContext(ContainerContext)

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
    if (duration === null) return

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

  return localVisible && container
    ? ReactDOM.createPortal(
        <div style={containerVar as React.CSSProperties} className={CNM.get({ styles, cls: [className] })}>
          <div className={containerStyles}>
            <IconItem
              alt={type}
              className={CNM.get({ styles, cls: ['message__icon'] })}
              icon={iconByType[type]}
              showDefaultFallback={false}
              size={20}
              {...iconProps}
            />
            <div>
              {text && <span className={textStyles(!!description)}>{text}</span>}
              {description && <span className={textStyles()}>{description}</span>}
            </div>
          </div>
        </div>,
        container
      )
    : null
}

/**
 * Molecule UI component for Message
 */
export const Message = Component
