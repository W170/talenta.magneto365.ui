import React, { useMemo } from 'react'
import { IAlert } from './Alert.interface'
import style from './Alert.module.scss'
import { IconItem } from '@components/UI/atoms'
import { classMUI } from '@constants/stories'

import { Success, Info, Warning, Error, Close, IconAlertBlue } from '@constants/icons.constants'
import { TextCustom } from '@components/UI/atoms/Text/Text.component'

const alertIcons = {
  info: Info,
  'info-expanded': IconAlertBlue,
  success: Success,
  warning: Warning,
  error: Error
}

const Component: React.FC<IAlert> = ({
  text = '',
  type,
  customText,
  border = false,
  size,
  onClose,
  className = '',
  extraButton
}) => {
  const borderStyle = border ? style[`${classMUI}-${type}--with-border`] : ''
  const typeStyle = style[`${classMUI}-${type}`]
  const isExpandedVariant = type === 'info-expanded' && extraButton
  const iconByType = useMemo(() => alertIcons[type], [type])

  return (
    <div
      className={`${style[`${classMUI}-alert`]} ${className} ${borderStyle} ${typeStyle} ${
        isExpandedVariant ? style[`${classMUI}-alert--expanded`] : ''
      }`}
      style={{ width: size }}
    >
      <IconItem className={style[`${classMUI}-icon`]} icon={iconByType} alt={type} />
      {isExpandedVariant ? (
        <div className={style[`${classMUI}-alert-content`]}>
          <TextCustom text={text} customText={customText} className={style[`${classMUI}-text`]} />
          {extraButton}
        </div>
      ) : (
        <TextCustom text={text} customText={customText} className={style[`${classMUI}-text`]} />
      )}
      {!isExpandedVariant && extraButton}
      {onClose && (
        <button className={style[`${classMUI}-close-action`]} type="button" onClick={onClose}>
          <IconItem icon={Close} alt={type} />
        </button>
      )}
    </div>
  )
}

export const Alert = Component
