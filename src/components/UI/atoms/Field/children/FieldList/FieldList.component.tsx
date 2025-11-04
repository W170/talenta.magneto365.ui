import React, { useEffect, forwardRef } from 'react'
import { IFieldList, FieldListValue } from './FieldList.interface'
import { Item, Responsive, Wrapper, Body } from './children'
import { useFieldContext } from '../../Field.context'
import { classNames } from '@shared/utils/common'
import { ListContext } from './FieldList.context'
import { useFieldList } from './FieldList.hooks'
import { renderChildren } from '@utils/react'
import styles from './FieldList.module.scss'

const cx = classNames.bind(styles)

function BaseComponent<T extends FieldListValue>(
  {
    breakpoint: controlledBreakpoint,
    children,
    className,
    defaultValue,
    multiple,
    onChange,
    value: controlledValue,
    ...props
  }: IFieldList<T>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const { breakpoint, hasList, isDesktop, isFocused, isMobile, setBreakpoint, setHasList } = useFieldContext()
  const { value, toggleValue } = useFieldList({
    defaultValue,
    multiple,
    onChange,
    value: controlledValue
  })

  useEffect(() => {
    if (!breakpoint && controlledBreakpoint) {
      setBreakpoint(controlledBreakpoint)
    }
  }, [breakpoint, controlledBreakpoint, setBreakpoint])

  useEffect(() => {
    if (!hasList) setHasList(true)
  }, [hasList, setHasList])

  return (
    <ListContext.Provider value={{ toggleValue, value }}>
      <Responsive>
        <div
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
          {renderChildren(children, { isDesktop, isMobile })}
        </div>
      </Responsive>
    </ListContext.Provider>
  )
}

const Component = forwardRef(BaseComponent) as <T extends FieldListValue = FieldListValue>(
  props: IFieldList<T> & { ref?: React.Ref<HTMLDivElement> }
) => React.ReactElement | null

export const FieldList = Object.assign(Component, { Item, Wrapper, Body })
