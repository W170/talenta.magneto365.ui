import React, { forwardRef, useCallback } from 'react'
import { classNames } from '@shared/utils/common'
import { IFieldWrapper } from './FieldWrapper.interface'
import { useFieldContext } from '../../Field.context'
import styles from './FieldWrapper.module.scss'

const cx = classNames.bind(styles)

const BaseComponent = (
  { children, className, nonRelative, onBlur: controlledOnBlur, tabIndex, ...props }: IFieldWrapper,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const { isMobile, wrapperRef, onBlur } = useFieldContext()

  const handleOnBlur = useCallback(
    (evt: React.FocusEvent<HTMLInputElement>) => {
      onBlur(evt, ref || wrapperRef)
      controlledOnBlur?.(evt)
    },
    [controlledOnBlur, onBlur, ref, wrapperRef]
  )

  return (
    <div
      {...props}
      tabIndex={tabIndex || -1}
      className={cx('magneto-ui-field-wrapper', nonRelative ? 'magneto-ui-field-wrapper--non-relative' : '', className)}
      onBlur={handleOnBlur}
      data-lib="magneto-ui"
      data-slot="field-wrapper"
      data-state={nonRelative ? 'non-relative' : 'relative'}
      ref={ref || wrapperRef} /* TODO: Combine refs */
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? React.cloneElement(child, { isMobile }) : child
      )}
    </div>
  )
}

const Component = forwardRef<HTMLDivElement, IFieldWrapper>(BaseComponent)

/**
 * Atom UI of field. It includes .
 */
export const FieldWrapper = Object.assign(Component, {})
