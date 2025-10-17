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
    align = 'left',
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
  const prefixRef = useRef<HTMLSpanElement | null>(null)
  const suffixRef = useRef<HTMLSpanElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { hasList, setIsFocused, isFocused, id } = useFieldContext()
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
      if (hasList) handleOnFocus(evt)
      controlledOnFocus?.(evt)
    },
    [controlledOnFocus, hasList, handleOnFocus, isMobile, preserveFocus]
  )

  const handleOnWrapperMouseDown = useCallback(
    (evt: React.MouseEvent) => {
      if (inputRef.current?.contains(evt.target as Node)) {
        return
      }

      if (
        disabled ||
        readOnly ||
        prefixRef.current?.contains(evt.target as Node) ||
        suffixRef.current?.contains(evt.target as Node)
      )
        return

      if (hasList) {
        setIsFocused(true)
      }

      evt.preventDefault()
      inputRef.current?.focus()
    },
    [disabled, hasList, readOnly, setIsFocused]
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
      {prefix && (
        <span ref={prefixRef} className={cx('magneto-ui-field-input-prefix')}>
          {typeof prefix === 'function' ? prefix({ opened: hasList === true && isFocused }) : prefix}
        </span>
      )}
      <input
        {...props}
        aria-describedby={`${id}-hint`}
        className={cx(
          'magneto-ui-field-input',
          isMobile ? 'magneto-ui-field-input-wrapper--mobile' : '',
          align ? `magneto-ui-field-input--${align}` : '',
          type === FieldInputTypeEnum.BUTTON
            ? !value
              ? 'magneto-ui-field-input--button-placeholder'
              : 'magneto-ui-field-input--button-value'
            : '',
          className
        )}
        disabled={disabled}
        onFocus={handleLocalOnFocus}
        placeholder={placeholder}
        readOnly={readOnly}
        ref={(node) => combineRefs(node, inputRef, ref)}
        type={type}
        value={type === FieldInputTypeEnum.BUTTON ? (!value ? placeholder : value) : value}
      />
      {suffix && (
        <span ref={suffixRef} className={cx('magneto-ui-field-input-suffix')}>
          {typeof suffix === 'function' ? suffix({ opened: hasList === true && isFocused }) : suffix}
        </span>
      )}
    </span>
  )
}

const Component = forwardRef<HTMLInputElement, IFieldInput>(BaseComponent)

/**
 * Atom UI of field. It includes .
 */
export const FieldInput = Object.assign(Component, {})
