import React from 'react'
import { classNames } from '@shared/utils/common'
import styles from './date.module.scss'
import { IDate } from './date.interface'

const cx = classNames.bind(styles)

const formatDate = (inputDate: string | number | Date): string => {
  let parsedDate: Date
  if (inputDate instanceof Date) {
    parsedDate = inputDate
  } else if (typeof inputDate === 'string' || typeof inputDate === 'number') {
    parsedDate = new Date(inputDate)
  } else {
    return 'Fecha inválida'
  }
  if (isNaN(parsedDate.getTime())) return 'Fecha inválida'
  return new Intl.DateTimeFormat('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(parsedDate)
}

const Component: React.FC<IDate> = ({ date, ...props }) => {
  const componentDate = (value: string | number | Date) => (
    <div className={cx('date')} {...props}>
      {formatDate(value)}
    </div>
  )

  if (date) {
    return componentDate(date)
  }

  return null
}
/**
 *  Molecule UI component of Candidate Comments
 */
export const DateCommets = Component
