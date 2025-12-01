import React, { forwardRef } from 'react'
import { IHeaderRecord } from './headerRecord.interface'
import { classNames } from '@shared/utils/common'
import styles from './headerRecord.module.scss'

const cx = classNames.bind(styles)

const BaseComponent = ({ className, children }: IHeaderRecord, ref: React.ForwardedRef<HTMLDivElement>) => {
  return (
    <div className={cx('magneto-ui-headerRecord', className)} ref={ref}>
      {children}
    </div>
  )
}

const Component = forwardRef<HTMLDivElement, IHeaderRecord>(BaseComponent)

/**
 * Organism UI of Record. It includes .
 */
export const Header = Object.assign(Component, {})
