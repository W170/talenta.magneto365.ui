import React, { forwardRef } from 'react'
import { IFieldGroup } from './FieldGroup.interface'
import { classNames } from '@shared/utils/common'
import styles from './FieldGroup.module.scss'

const cx = classNames.bind(styles)

const BaseComponent = ({ children, className, ...props }: IFieldGroup, ref: React.ForwardedRef<HTMLDivElement>) => {
  return (
    <div
      {...props}
      ref={ref}
      className={cx('magneto-ui-field-group', className)}
      data-lib="magneto-ui"
      data-slot="field-group"
    >
      {children}
    </div>
  )
}

const Component = forwardRef<HTMLDivElement, IFieldGroup>(BaseComponent)

/**
 * Atom UI of field. It includes .
 */
export const FieldGroup = Object.assign(Component, {})
