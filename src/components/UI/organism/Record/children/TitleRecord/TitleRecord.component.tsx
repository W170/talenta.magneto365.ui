import React, { forwardRef, Fragment } from 'react'
import { ITitleRecord } from './TitleRecord.interface'
import { classNames } from '@shared/utils/common'
import { IconItem } from '@components/UI/atoms'
import styles from './TitleRecord.module.scss'

const cx = classNames.bind(styles)

const BaseComponent = ({ className, title, children, icon }: ITitleRecord, ref: React.ForwardedRef<HTMLDivElement>) => {
  return (
    <Fragment>
      {children ? (
        children
      ) : (
        <div className={cx('magneto-ui-title-record', className)} ref={ref}>
          {icon && <IconItem icon={icon} size={18} />}
          {title}
        </div>
      )}
    </Fragment>
  )
}

const Component = forwardRef<HTMLDivElement, ITitleRecord>(BaseComponent)

/**
 * Atom UI of field. It includes .
 */
export const TitleRecord = Object.assign(Component, {})
