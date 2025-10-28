import React, { useEffect, forwardRef, useState, useCallback, useMemo } from 'react'
import { MiniArrowGrayDown, MiniArrowGrayUp } from '@constants/icons.constants'
import { IFieldList, FieldListValue } from './FieldList.interface'
import { Item, Responsive, Wrapper } from './children'
import { useFieldContext } from '../../Field.context'
import { classNames } from '@shared/utils/common'
import { ListContext } from './FieldList.context'
import styles from './FieldList.module.scss'

const cx = classNames.bind(styles)

const containerStyle = {
  '--custom-scrollbar-thumb-down-background': `url(${MiniArrowGrayDown})`,
  '--custom-scrollbar-thumb-up-background': `url(${MiniArrowGrayUp})`
}

function BaseComponent<T extends FieldListValue>(
  {
    breakpoint: controlledBreakpoint,
    children,
    className,
    defaultValue,
    multiple,
    onChange,
    style,
    value: controlledValue,
    ...props
  }: IFieldList<T>,
  ref: React.ForwardedRef<HTMLUListElement>
) {
  const [selected, setSelected] = useState<T[] | T | undefined>(defaultValue)
  const { breakpoint, hasList, isDesktop, isFocused, isMobile, setBreakpoint, setHasList, setIsFocused } =
    useFieldContext()

  const styles = useMemo(() => ({ ...containerStyle, ...style }), [style])

  const isControlled = useMemo(() => controlledValue !== undefined, [controlledValue])

  const value = useMemo(() => (isControlled ? controlledValue : selected), [isControlled, controlledValue, selected])

  const handleMultipleChange = useCallback(
    (newValue: T[]) => {
      if (!onChange) return
      const multipleOnChange = onChange as (value?: T[]) => void
      multipleOnChange(newValue)
    },
    [onChange]
  )

  const handleSingleChange = useCallback(
    (newValue: T) => {
      if (!onChange) return
      const singleOnChange = onChange as (value: T) => void
      singleOnChange(newValue)
    },
    [onChange]
  )

  const toggleValue = useCallback(
    (value?: FieldListValue) => {
      if (!value) return

      if (multiple) {
        const prevArr = ((isControlled ? controlledValue : selected) as T[]) ?? []
        const exists = prevArr.some((v) => v.id === value.id)
        const next = exists ? prevArr.filter((v) => v.id !== (value as T).id) : [...prevArr, value as T]
        handleMultipleChange(next)
        if (!isControlled) setSelected(next)
      } else {
        setIsFocused(false)
        handleSingleChange(value as T)
        if (!isControlled) setSelected(value as T)
      }
    },
    [controlledValue, isControlled, multiple, handleMultipleChange, handleSingleChange, selected, setIsFocused]
  )

  useEffect(() => {
    if (!breakpoint && controlledBreakpoint) {
      setBreakpoint(controlledBreakpoint)
    }
  }, [breakpoint, controlledBreakpoint, setBreakpoint])

  useEffect(() => {
    if (!hasList) setHasList(true)
  }, [hasList, setHasList])

  return (
    <ListContext.Provider value={{ toggleValue: toggleValue as (value?: FieldListValue) => void, value }}>
      <Responsive>
        <ul
          {...props}
          ref={ref}
          data-lib="magneto-ui"
          data-slot="field-list"
          data-state={isFocused ? 'visible' : 'hidden'}
          style={styles as React.CSSProperties}
          className={cx(
            'magneto-ui-field-list',
            !isMobile ? 'magneto-ui-field-list--desktop' : '',
            isFocused ? 'magneto-ui-field-list--visible' : 'magneto-ui-field-list--hidden',
            className
          )}
        >
          {typeof children === 'function' ? children({ isDesktop, isMobile }) : children}
        </ul>
      </Responsive>
    </ListContext.Provider>
  )
}

const Component = forwardRef(BaseComponent) as <T extends FieldListValue = FieldListValue>(
  props: IFieldList<T> & { ref?: React.Ref<HTMLUListElement> }
) => React.ReactElement | null

export const FieldList = Object.assign(Component, { Item, Wrapper })
