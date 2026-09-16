import React, { forwardRef } from 'react'
import { IRecord } from './record.interface'
import styles from './record.module.scss'
import { classNames } from '@shared/utils/common'
import { TitleRecord } from './children/TitleRecord/TitleRecord.component'
import { HeadeRecord } from './children/HeaderRecord/HeaderRecord.component'
import { BodyRecord } from './children/BodyRecord/BodyRecord.component'
import DateComponent from './children/DateRecord/DateRecord.component'

const cx = classNames.bind(styles)
const BaseComponent = ({ children, ...props }: IRecord, ref: React.ForwardedRef<HTMLDivElement>) => {
  return (
    <div className={cx('magneto-ui-record')} {...props} ref={ref}>
      {children}
    </div>
  )
}

const Component = forwardRef<HTMLDivElement, IRecord>(BaseComponent)

/**
 * Organism UI of Record. It includes .
 */
export const Record = Object.assign(Component, {
  Title: TitleRecord,
  Header: HeadeRecord,
  Body: BodyRecord,
  Date: DateComponent
})
