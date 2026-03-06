import React, { forwardRef, useCallback, useRef } from 'react'
import { IFieldArea } from './FieldArea.interface'
import { combineRefs } from '../../Field.constant'
import { useFieldError } from '../../Field.hooks'
import { classNames } from '@shared/utils/common'
import styles from './FieldArea.module.scss'

const cx = classNames.bind(styles)

const BaseComponent = (
  { className, disabled, error, readOnly, wrapper, textareaClassName, ...props }: IFieldArea,
  ref: React.ForwardedRef<HTMLTextAreaElement>
) => {
  const areaRef = useRef<HTMLTextAreaElement | null>(null)

  useFieldError(error)

  const handleOnWrapperMouseDown = useCallback(
    (evt: React.MouseEvent) => {
      if (areaRef.current?.contains(evt.target as Node)) {
        return
      }

      if (disabled || readOnly) return

      evt.preventDefault()

      const area = areaRef.current

      area?.focus()

      if (area && typeof area.value === 'string') {
        const len = area.value.length
        area.setSelectionRange(len, len)
      }
    },
    [disabled, readOnly]
  )

  return (
    <span
      {...wrapper}
      onMouseDown={handleOnWrapperMouseDown}
      data-lib="magneto-ui"
      data-slot="field-area"
      data-disabled={!!disabled}
      data-readonly={!!readOnly}
      data-error={!!error}
      className={cx(
        'magneto-ui-field-area-wrapper',
        disabled ? 'magneto-ui-field-area-wrapper--disabled' : '',
        readOnly ? 'magneto-ui-field-area-wrapper--readonly' : '',
        error ? 'magneto-ui-field-area-wrapper--error' : '',
        className
      )}
    >
      <textarea
        {...props}
        className={cx('magneto-ui-field-area', textareaClassName)}
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
