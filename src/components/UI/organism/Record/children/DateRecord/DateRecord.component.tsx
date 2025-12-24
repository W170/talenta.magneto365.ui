import React from 'react'
import { IDateRecord } from './DateRecord.interface'
import styles from './DateRecord.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const DateComponent = ({ className, date }: IDateRecord) => {
  if (!date) {
    return null
  }

  const fecha = new Date(date)

  const formateada = new Intl.DateTimeFormat('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'UTC'
  }).format(fecha)

  return <div className={cx('magneto-ui-DateRecord', className)}>{formateada}</div>
}

export default DateComponent
