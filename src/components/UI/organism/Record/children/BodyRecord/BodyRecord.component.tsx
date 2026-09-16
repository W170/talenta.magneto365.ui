import React, { forwardRef } from 'react'
import { IBodyRecord } from './BodyRecord.interface'
import styles from './BodyRecord.module.scss'
import { classNames } from '@shared/utils/common'
import { Line } from '../LineRecord/LineaRecord.component'
import { TitleRecord } from '../TitleRecord/TitleRecord.component'
import { HeadeRecord } from '../HeaderRecord/HeaderRecord.component'

const cx = classNames.bind(styles)
const BaseComponent = ({ children, ...props }: IBodyRecord, ref: React.ForwardedRef<HTMLDivElement>) => {
  return (
    <div className={cx('magneto-ui-record')} {...props} ref={ref}>
      <Line />
      <div className={cx('magneto-ui-record_children')}>{children}</div>
    </div>
  )
}

const Component = forwardRef<HTMLDivElement, IBodyRecord>(BaseComponent)

/**
 * Organism UI of Record. It includes .
 */
export const BodyRecord = Object.assign(Component, { Title: TitleRecord, Header: HeadeRecord })
