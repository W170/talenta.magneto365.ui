import React, { forwardRef, useCallback, useRef } from 'react'
import { IFieldArea } from './FieldArea.interface'
import { combineRefs } from '../../Field.constant'
import { useFieldError } from '../../Field.hooks'
import { classNames } from '@shared/utils/common'
import styles from './FieldArea.module.scss'

const cx = classNames.bind(styles)

const BaseComponent = (
  { className, disabled, error, readOnly, wrapper, ...props }: IFieldArea,
  ref: React.ForwardedRef<HTMLTextAreaElement>
) => {
  const areaRef = useRef<HTMLTextAreaElement | null>(null)

  useFieldError(error)

  const handleOnWrapperMouseDown = useCallback(
    (evt: React.MouseEvent) => {
      if (disabled || readOnly) return

      evt.preventDefault()
      areaRef.current?.focus()
    },
    [disabled, readOnly]
  )

  return (
    <span
      {...wrapper}
      onMouseDown={handleOnWrapperMouseDown}
      data-error={error}
      data-lib="magneto-ui"
      data-slot="field-area"
      className={cx(
        'magneto-ui-field-area-wrapper',
        disabled ? 'magneto-ui-field-area-wrapper--disabled' : '',
        readOnly ? 'magneto-ui-field-area-wrapper--readonly' : '',
        error ? 'magneto-ui-field-area-wrapper--error' : '',
        wrapper?.className
      )}
    >
      <textarea
        {...props}
        className={cx('magneto-ui-field-area', className)}
        disabled={disabled}
        readOnly={readOnly}
        ref={(node) => combineRefs(node, areaRef, ref)}
      />
    </span>
  )
}

const Component = forwardRef<HTMLTextAreaElement, IFieldArea>(BaseComponent)

/**
 * Atom UI of field. It includes .
 */
export const FieldArea = Object.assign(Component, {})
