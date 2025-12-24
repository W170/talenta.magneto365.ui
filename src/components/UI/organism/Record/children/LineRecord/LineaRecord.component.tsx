import React, { forwardRef } from 'react'
import { ILineaRecord } from './LineaRecord.interface'
import { classNames } from '@shared/utils/common'
import styles from './LineaRecord.module.scss'

const cx = classNames.bind(styles)

const BaseComponent = ({ className }: ILineaRecord, ref: React.ForwardedRef<HTMLDivElement>) => {
  return <div className={cx('magneto-ui-line-record', className)} ref={ref}></div>
}

const Component = forwardRef<HTMLDivElement, ILineaRecord>(BaseComponent)

/**
 * Atom UI of field. It includes .
 */
export const Line = Object.assign(Component, {})
