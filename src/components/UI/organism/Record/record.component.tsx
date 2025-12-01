import React, { forwardRef } from 'react'
import { IRecord } from './record.interface'
import styles from './record.module.scss'
import { classNames } from '@shared/utils/common'
import { Title } from './children/TitleRecord/title.component'
import { Header } from './children/HeaderRecord/headerRecord.component'
import { Body } from './children/BodyRecord/bodyRecord.component'
import DateComponent from './children/DateRecord/dateRecord.component'

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
export const Record = Object.assign(Component, { Title, Header, Body, Date: DateComponent })
