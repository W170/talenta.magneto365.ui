import React, { useEffect, forwardRef, useState, useCallback } from 'react'
import { useFieldContext } from '../../Field.context'
import { IFieldList } from './FieldList.interface'
import { classNames } from '@shared/utils/common'
import { ListContext } from './FieldList.context'
import { Item, Responsive } from './children'
import styles from './FieldList.module.scss'

const cx = classNames.bind(styles)

function BaseComponent(
  {
    breakpoint: controlledBreakpoint,
    children,
    className,
    defaultValue,
    isMobile: _,
    multiple,
    onChange,
    ...props
  }: IFieldList,
  ref: React.ForwardedRef<HTMLUListElement>
) {
  void _

  const [selected, setSelected] = useState<unknown[] | unknown | undefined>(defaultValue)
  const { breakpoint, hasList, isFocused, isMobile, setBreakpoint, setHasList, setIsFocused } = useFieldContext()

  const toggleValue = useCallback(
    (value) => {
      if (!value) return

      if (multiple) {
        setSelected((prev: unknown) => {
          const prevArr = (prev as unknown[]) ?? []
          const exists = prevArr.some((v) => JSON.stringify(v) === JSON.stringify(value))
          const next = exists ? prevArr.filter((v) => JSON.stringify(v) !== JSON.stringify(value)) : [...prevArr, value]
          onChange?.(next)
          return next
        })
      } else {
        setIsFocused(false)
        setSelected(value)
        onChange?.(value)
      }
    },
    [multiple, onChange, setIsFocused]
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
    <ListContext.Provider value={{ selected, toggleValue }}>
      <Responsive>
        <ul
          {...props}
          ref={ref}
          data-lib="magneto-ui"
          data-slot="field-list"
          data-state={isFocused ? 'visible' : 'hidden'}
          className={cx(
            'magneto-ui-field-list',
            !isMobile ? 'magneto-ui-field-list--desktop' : '',
            isFocused ? 'magneto-ui-field-list--visible' : 'magneto-ui-field-list--hidden',
            className
          )}
        >
          {typeof children === 'function' ? children({ isMobile }) : children}
        </ul>
      </Responsive>
    </ListContext.Provider>
  )
}

/* const Component = forwardRef(BaseComponent)(
  props: IFieldList & { ref?: React.ForwardedRef<HTMLUListElement> }
) => ReturnType<typeof BaseComponent> */

const Component = forwardRef<HTMLUListElement, IFieldList>(BaseComponent)

export const FieldList = Object.assign(Component, { Item })
