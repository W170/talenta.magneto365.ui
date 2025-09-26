import React, { forwardRef, useCallback } from 'react'
import { IFieldListWrapper } from './FieldListWrapper.interface'
import { useFieldContext } from '../../../../Field.context'
import styles from './FieldListWrapper.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const BaseComponent = (
  { children, className, nonRelative, onBlur: controlledOnBlur, tabIndex, ...props }: IFieldListWrapper,
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
      className={cx(
        'magneto-ui-field-list-wrapper',
        nonRelative ? 'magneto-ui-field-list-wrapper--non-relative' : '',
        className
      )}
      onBlur={handleOnBlur}
      data-lib="magneto-ui"
      data-slot="field-list-wrapper"
      data-state={nonRelative ? 'non-relative' : 'relative'}
      ref={ref || wrapperRef} /* TODO: Combine refs */
    >
      {React.Children.map(children, (child) => (typeof child === 'function' ? child({ isMobile }) : child))}
    </div>
  )
}

const Component = forwardRef<HTMLDivElement, IFieldListWrapper>(BaseComponent)

/**
 * Atom UI of field. It includes .
 */
export const FieldListWrapper = Object.assign(Component, {})
