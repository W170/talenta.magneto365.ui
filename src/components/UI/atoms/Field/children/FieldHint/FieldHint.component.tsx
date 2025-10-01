import React, { forwardRef } from 'react'
import { classNames } from '@shared/utils/common'
import { IFieldHint } from './FieldHint.interface'
import styles from './FieldHint.module.scss'

const cx = classNames.bind(styles)

const BaseComponent = (
  { children, className, type, ...props }: IFieldHint,
  ref: React.ForwardedRef<HTMLSpanElement>
) => {
  return (
    <span
      {...props}
      ref={ref}
      data-lib="magneto-ui"
      data-slot="field-hint"
      className={cx('magneto-ui-field-hint', type ? `magneto-ui-field-hint--${type}` : '', className)}
    >
      {children}
    </span>
  )
}

const Component = forwardRef<HTMLSpanElement, IFieldHint>(BaseComponent)

/**
 * Atom UI of field. It includes .
 */
export const FieldHint = Object.assign(Component, {})
