import React from 'react'
import { IconItem } from '@components/UI/atoms'
import styles from './GlobalQuestionError.module.scss'
import { InfoRed } from '@constants/icons.constants'
import { IGlobalQuestionErrorProps } from './GlobalQuestionError.interface'

const GlobalQuestionError: React.FC<IGlobalQuestionErrorProps> = ({ errorText }) => {
  return (
    <div className={styles['question__error']}>
      <IconItem icon={InfoRed} size={18} />
      <div className={styles['question__error-text']}>{errorText}</div>
    </div>
  )
}

export default GlobalQuestionError
