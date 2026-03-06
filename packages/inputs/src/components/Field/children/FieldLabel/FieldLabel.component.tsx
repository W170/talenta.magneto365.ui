import React, { forwardRef } from 'react'
import { classNames } from '@magneto365-ui/shared'
import { IFieldLabel } from './FieldLabel.interface'
import styles from './FieldLabel.module.scss'

const cx = classNames.bind(styles)

const BaseComponent = ({ children, className, ...props }: IFieldLabel, ref: React.ForwardedRef<HTMLLabelElement>) => {
  return (
    <label
      {...props}
      ref={ref}
      className={cx('magneto-ui-field-label', className)}
      data-lib="magneto-ui"
      data-slot="field-label"
    >
      {children}
    </label>
  )
}

const Component = forwardRef<HTMLLabelElement, IFieldLabel>(BaseComponent)

/**
 * Atom UI of field. It includes .
 */
export const FieldLabel = Object.assign(Component, {})
