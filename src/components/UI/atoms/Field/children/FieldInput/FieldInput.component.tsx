import React, { forwardRef, useCallback, useRef } from 'react'
import { IFieldInput, FieldInputTypeEnum } from './FieldInput.interface'
import { useFieldError, useFieldFocus } from '../../Field.hooks'
import { useFieldContext } from '../../Field.context'
import { combineRefs } from '../../Field.constant'
import { classNames } from '@shared/utils/common'
import styles from './FieldInput.module.scss'

const cx = classNames.bind(styles)

const BaseComponent = (
  {
    className,
    disabled,
    error,
    isMobile,
    onFocus: controlledOnFocus,
    placeholder,
    prefix,
    preserveFocus,
    readOnly,
    size,
    suffix,
    type,
    value,
    wrapper,
    ...props
  }: IFieldInput,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { hasList, setIsFocused } = useFieldContext()
  const { handleOnFocus } = useFieldFocus<HTMLInputElement>({
    disabled,
    readOnly,
    ref: inputRef,
    onFocus: controlledOnFocus
  })

  useFieldError(error)

  const handleLocalOnFocus = useCallback(
    (evt: React.FocusEvent<HTMLInputElement>) => {
      if (isMobile && !preserveFocus && hasList) evt.target.blur()

      controlledOnFocus?.(evt)
      handleOnFocus(evt)
    },
    [controlledOnFocus, hasList, handleOnFocus, isMobile, preserveFocus]
  )

  const handleOnWrapperMouseDown = useCallback(
    (evt: React.MouseEvent) => {
      if (disabled || readOnly) return

      evt.preventDefault()
      setIsFocused(true)
      inputRef.current?.focus()
    },
    [disabled, readOnly, setIsFocused]
  )

  if (type && !Object.values(FieldInputTypeEnum).includes(type as FieldInputTypeEnum)) return null

  return (
    <span
      {...wrapper}
      onMouseDown={handleOnWrapperMouseDown}
      data-error={error}
      data-lib="magneto-ui"
      data-slot="field-input"
      className={cx(
        'magneto-ui-field-input-wrapper',
        disabled ? 'magneto-ui-field-input-wrapper--disabled' : '',
        readOnly ? 'magneto-ui-field-input-wrapper--readonly' : '',
        isMobile ? 'magneto-ui-field-input-wrapper--mobile' : '',
        error ? 'magneto-ui-field-input-wrapper--error' : '',
        size ? `magneto-ui-field-input-wrapper--${size}` : '',
        type ? `magneto-ui-field-input-wrapper--${type}` : '',
        wrapper?.className
      )}
    >
      {prefix}
      <input
        {...props}
        className={cx('magneto-ui-field-input', isMobile ? 'magneto-ui-field-input-wrapper--mobile' : '', className)}
        disabled={disabled}
        onFocus={handleLocalOnFocus}
        placeholder={placeholder}
        readOnly={readOnly}
        ref={(node) => combineRefs(node, inputRef, ref)}
        type={type}
        value={type === FieldInputTypeEnum.BUTTON ? (!value ? placeholder : value) : value}
      />
      {suffix}
    </span>
  )
}

const Component = forwardRef<HTMLInputElement, IFieldInput>(BaseComponent)

/**
 * Atom UI of field. It includes .
 */
export const FieldInput = Object.assign(Component, {})
