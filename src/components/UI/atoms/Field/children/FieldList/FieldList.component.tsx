import React, { useEffect, useRef, forwardRef } from 'react'
import { IFieldList, FieldListValue } from './FieldList.interface'
import { Item, Responsive, Wrapper, Body } from './children'
import { useFieldContext } from '../../Field.context'
import { combineRefs } from '../../Field.constant'
import { classNames } from '@shared/utils/common'
import { ListContext, useFieldListLayer } from './FieldList.context'
import { watchListLayout } from './FieldList.constant'
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
    direction,
    max,
    multiple,
    onChange,
    value: controlledValue,
    ...props
  }: IFieldList<T>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const { breakpoint, hasError, hasList, isDesktop, isFocused, isMobile, setBreakpoint, setHasList } = useFieldContext()
  const { value, toggleValue } = useFieldList({
    defaultValue,
    max,
    multiple,
    onChange,
    value: controlledValue
  })

  const listRef = useFieldListLayer(direction)
  const shadowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!breakpoint && controlledBreakpoint) {
      setBreakpoint(controlledBreakpoint)
    }
  }, [breakpoint, controlledBreakpoint, setBreakpoint])

  useEffect(() => {
    if (!hasList) setHasList(true)
  }, [hasList, setHasList])

  useEffect(() => {
    const listNode = listRef.current
    const shadow = shadowRef.current
    if (!isFocused || hasError || !listNode || !shadow) return

    return watchListLayout(listNode, () => {
      const fieldInput = listNode
        .closest('[data-lib="magneto-ui"][data-slot="field"]')
        ?.querySelector('[data-slot="field-input"]')
      if (!fieldInput) return

      const { width, height } = fieldInput.getBoundingClientRect()
      shadow.style.width = `${width}px`
      shadow.style.height = `calc(100% + ${height}px)`
    })
  }, [hasError, isFocused, isMobile, listRef])

  return (
    <ListContext.Provider
      value={{
        isInsideList: true,
        isMaxReached: Boolean(multiple && max !== undefined && Array.isArray(value) && value.length >= max),
        toggleValue,
        value
      }}
    >
      <Responsive>
        <div
          {...props}
          ref={(node) => combineRefs(node, listRef, ref)}
          data-lib="magneto-ui"
          data-slot="field-list"
          data-state={isFocused ? 'visible' : 'hidden'}
          className={cx(
            'magneto-ui-field-list',
            !isMobile ? 'magneto-ui-field-list--desktop' : '',
            direction === 'up' && !isMobile ? 'magneto-ui-field-list--up' : undefined,
            isFocused ? 'magneto-ui-field-list--visible' : 'magneto-ui-field-list--hidden',
            hasError ? 'magneto-ui-field-list--error' : '',
            className
          )}
        >
          <div
            ref={shadowRef}
            className={cx(
              'magneto-ui-field-list-shadow',
              direction === 'up' ? 'magneto-ui-field-list-shadow--up' : undefined,
              isFocused && !hasError ? 'magneto-ui-field-list-shadow--visible' : 'magneto-ui-field-list-shadow--hidden'
            )}
          />
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
