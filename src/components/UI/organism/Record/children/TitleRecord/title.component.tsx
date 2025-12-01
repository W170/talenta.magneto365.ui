import React, { forwardRef, Fragment } from 'react'
import { Ititle } from './title.interface'
import { classNames } from '@shared/utils/common'
import { IconItem } from '@components/UI/atoms'
import styles from './title.module.scss'

const cx = classNames.bind(styles)

const BaseComponent = ({ className, title, children, icon }: Ititle, ref: React.ForwardedRef<HTMLDivElement>) => {
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

const Component = forwardRef<HTMLDivElement, Ititle>(BaseComponent)

/**
 * Atom UI of field. It includes .
 */
export const Title = Object.assign(Component, {})
