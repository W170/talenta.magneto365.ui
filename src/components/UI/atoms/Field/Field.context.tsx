import React, { createContext, useContext, useState, useCallback, useRef, useMemo } from 'react'
import { IFieldContext, IFieldProvider, TFieldScreenSizes } from './Field.interface'
import { useMediaQuery } from '@components/hooks'
import { classNames } from '@shared/utils/common'
import styles from './Field.module.scss'

const cx = classNames.bind(styles)

const FieldContext = createContext<IFieldContext | null>(null)

export const FieldProvider = ({ children, className, fieldRef, ...props }: IFieldProvider) => {
  const [breakpoint, setBreakpoint] = useState<TFieldScreenSizes | null>(null)
  const [hasError, setHasError] = useState<boolean | undefined>(undefined)
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [hasList, setHasList] = useState<boolean>(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [id, setId] = useState<string>('')

  const isMobile = useMediaQuery(false, { [breakpoint || 'sm']: true })

  const isDesktop = useMemo(() => !isMobile, [isMobile])

  const onFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const onBlur = useCallback(
    function <T>(evt?: React.FocusEvent<T>) {
      if (isMobile) return

      const nextTarget = (evt?.relatedTarget as Node) || document.activeElement

      if (nextTarget && wrapperRef.current?.contains(nextTarget)) return

      setIsFocused(false)
    },
    [isMobile]
  )

  return (
    <FieldContext.Provider
      value={{
        breakpoint,
        hasError,
        hasList,
        id,
        isDesktop,
        isFocused,
        isMobile,
        wrapperRef,
        onBlur,
        onFocus,
        setBreakpoint,
        setHasError,
        setHasList,
        setId,
        setIsFocused
      }}
    >
      <div
        {...props}
        className={cx('magneto-ui-field', className)}
        data-error={hasError}
        data-focused={isFocused}
        ref={fieldRef}
      >
        {children}
      </div>
    </FieldContext.Provider>
  )
}

export const useFieldContext = () => {
  const context = useContext(FieldContext)
  if (!context) {
    throw new Error('useFieldContext must be used within a FieldProvider')
  }
  return context
}
