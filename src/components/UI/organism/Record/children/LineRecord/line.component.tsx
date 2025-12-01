import React, { forwardRef } from 'react'
import { ILinea } from './line.interface'
import { classNames } from '@shared/utils/common'
import styles from './line.module.scss'

const cx = classNames.bind(styles)

const BaseComponent = ({ className }: ILinea, ref: React.ForwardedRef<HTMLDivElement>) => {
  return <div className={cx('magneto-ui-line-record', className)} ref={ref}></div>
}

const Component = forwardRef<HTMLDivElement, ILinea>(BaseComponent)

/**
 * Atom UI of field. It includes .
 */
export const Line = Object.assign(Component, {})
