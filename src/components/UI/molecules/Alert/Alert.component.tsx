import React from 'react'
import { IAlert } from './Alert.interface'
import style from './Alert.module.scss'
import { IconItem } from '@components/UI/atoms'
import { classMUI } from '@constants/stories'
import { Text } from '@components/UI/atoms/Text'
import { Success, Info, Warning, Error } from '../../../../constants/icons.constants'

const alertIcons = {
  info: Info,
  success: Success,
  warning: Warning,
  error: Error
}

const Alert: React.FC<IAlert> = ({ text, type, customText, border = false, size }) => {
  const borderStyle = border ? style[`${classMUI}-${type}--with-border`] : ''
  const typeStyle = style[`${classMUI}-${type}`]

  const icon = alertIcons[type]

  return (
    <div className={`${style[`${classMUI}-alert`]} ${borderStyle} ${typeStyle}`} style={{ width: size }}>
      <IconItem className={style[`${classMUI}-icon`]} icon={icon} alt={type} />
      <Text text={text} customText={customText} className={style[`${classMUI}-text`]} />
    </div>
  )
}

export default Alert
