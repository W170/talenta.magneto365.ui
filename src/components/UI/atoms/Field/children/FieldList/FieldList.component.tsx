import React, { useEffect, forwardRef, useState, useCallback, useMemo } from 'react'
import { MiniArrowGrayDown, MiniArrowGrayUp } from '@constants/icons.constants'
import { Item, Responsive, Wrapper } from './children'
import { useFieldContext } from '../../Field.context'
import { IFieldList } from './FieldList.interface'
import { classNames } from '@shared/utils/common'
import { ListContext } from './FieldList.context'
import styles from './FieldList.module.scss'

const cx = classNames.bind(styles)

const containerStyle = {
  '--custom-scrollbar-thumb-down-background': `url(${MiniArrowGrayDown})`,
  '--custom-scrollbar-thumb-up-background': `url(${MiniArrowGrayUp})`
}

function BaseComponent(
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
  }: IFieldList<unknown>,
  ref: React.ForwardedRef<HTMLUListElement>
) {
  const [selected, setSelected] = useState<unknown[] | unknown | undefined>(defaultValue)
  const { breakpoint, hasList, isDesktop, isFocused, isMobile, setBreakpoint, setHasList, setIsFocused } =
    useFieldContext()

  const styles = useMemo(() => ({ ...containerStyle, ...style }), [style])

  const isControlled = useMemo(() => controlledValue !== undefined, [controlledValue])

  const value = useMemo(() => (isControlled ? controlledValue : selected), [isControlled, controlledValue, selected])

  const toggleValue = useCallback(
    (value) => {
      if (!value) return

      if (multiple) {
        const prevArr = ((isControlled ? controlledValue : selected) as unknown[]) ?? []
        const exists = prevArr.some((v) => JSON.stringify(v) === JSON.stringify(value))
        const next = exists ? prevArr.filter((v) => JSON.stringify(v) !== JSON.stringify(value)) : [...prevArr, value]
        onChange?.(next)
        if (!isControlled) setSelected(next)
      } else {
        setIsFocused(false)
        onChange?.(value)
        if (!isControlled) setSelected(value)
      }
    },
    [controlledValue, isControlled, multiple, onChange, selected, setIsFocused]
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
    <ListContext.Provider value={{ value, toggleValue }}>
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

const Component = forwardRef(BaseComponent) as <T>(
  props: IFieldList<T> & { ref?: React.ForwardedRef<HTMLUListElement> }
) => ReturnType<typeof BaseComponent>

// const Component = forwardRef<HTMLUListElement, IFieldList>(BaseComponent)

export const FieldList = Object.assign(Component, { Item, Wrapper })
