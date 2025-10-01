import { useEffect, useCallback } from 'react'
import { useFieldContext } from './Field.context'
import { IUseFieldFocus } from './Field.interface'

export const useFieldError = (error?: boolean) => {
  const { hasError, setHasError } = useFieldContext()

  useEffect(() => {
    if (error === undefined || error === hasError) return
    setHasError(error)
  }, [error, hasError, setHasError])
}

export function useFieldFocus<T extends HTMLElement>({
  disabled,
  readOnly,
  ref,
  onBlur: controlledOnBlur,
  onFocus: controlledOnFocus
}: IUseFieldFocus<T>) {
  const { onBlur, onFocus, isFocused, isMobile } = useFieldContext()

  const handleOnBlur = useCallback(
    (evt: React.FocusEvent<T>, ref?: React.RefObject<T> | React.ForwardedRef<T>) => {
      onBlur(evt, ref)
      controlledOnBlur?.(evt)
    },
    [controlledOnBlur, onBlur]
  )

  const handleOnFocus = useCallback(
    (evt: React.FocusEvent<T>) => {
      if (disabled || readOnly) return
      onFocus(evt)
      controlledOnFocus?.(evt)
    },
    [controlledOnFocus, disabled, onFocus, readOnly]
  )

  useEffect(() => {
    if (!isMobile && isFocused) {
      ref?.current?.focus()
    }
  }, [isFocused, isMobile, ref])

  return { handleOnFocus, handleOnBlur }
}
