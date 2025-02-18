import React from 'react'
import style from '../../InputFile.module.scss'
import { IInputFileButton } from './InputFileButton.interface'
import { IconItem } from '@components/UI/atoms'

const InputFileButton: React.FC<IInputFileButton> = ({ text, icon, className = '' }) => {
  return (
    <div className={`${style['magneto-ui-input-file--button']} ${className}`}>
      <IconItem alt={text} hover={false} icon={icon} />
      <p>{text}</p>
    </div>
  )
}

export default InputFileButton
