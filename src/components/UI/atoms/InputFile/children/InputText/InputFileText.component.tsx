import React from 'react'
import style from '../../InputFile.module.scss'
import {IInputFileText  } from './InputFileText.interface'

const InputFileText: React.FC<IInputFileText> = ({ text, className = '' }) => {
  return (
    <div className={`${style['magneto-ui-input-file--text']} ${className}`}>
      <p>{text}</p>
    </div>
  )
}

export default InputFileText
