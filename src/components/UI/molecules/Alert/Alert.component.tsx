import React, { useMemo } from 'react'
import { IAlert } from './Alert.interface'
import style from './Alert.module.scss'
import { IconItem } from '@components/UI/atoms'
import { classMUI } from '@constants/stories'
import { Text } from '@components/UI/atoms/Text'
import { Success, Info, Warning, Error, Close } from '@constants/icons.constants'

const alertIcons = {
  info: Info,
  success: Success,
  warning: Warning,
  error: Error
}

const Component: React.FC<IAlert> = ({ text, type, customText, border = false, size, onClose }) => {
  const borderStyle = border ? style[`${classMUI}-${type}--with-border`] : ''
  const typeStyle = style[`${classMUI}-${type}`]
  const iconByType = useMemo(() => alertIcons[type], [type])

  return (
    <div className={`${style[`${classMUI}-alert`]} ${borderStyle} ${typeStyle}`} style={{ width: size }}>
      <IconItem className={style[`${classMUI}-icon`]} icon={iconByType} alt={type} />
      <Text text={text} customText={customText} className={style[`${classMUI}-text`]} />
      {onClose && (
        <button className={style[`${classMUI}-close-action`]} type="button" onClick={onClose}>
          <IconItem icon={Close} alt={type} />
        </button>
      )}
    </div>
  )
}

export const Alert = Component
