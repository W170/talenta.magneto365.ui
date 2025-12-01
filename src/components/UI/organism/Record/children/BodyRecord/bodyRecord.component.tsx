import React, { forwardRef } from 'react'
import { IRecord } from './record.interface'
import styles from './record.module.scss'
import { classNames } from '@shared/utils/common'
import { Line } from './../LineRecord/line.component'
import { Title } from './../TitleRecord/title.component'
import { Header } from './../HeaderRecord/headerRecord.component'

const cx = classNames.bind(styles)
const BaseComponent = ({ children, ...props }: IRecord, ref: React.ForwardedRef<HTMLDivElement>) => {
  return (
    <div className={cx('magneto-ui-record')} {...props} ref={ref}>
      <Line />
      <div className={cx('magneto-ui-record_children')}>{children}</div>
    </div>
  )
}

const Component = forwardRef<HTMLDivElement, IRecord>(BaseComponent)

/**
 * Organism UI of Record. It includes .
 */
export const Body = Object.assign(Component, { Title, Header })
