import React, { useEffect, useRef, forwardRef } from 'react'
import { IFieldList, FieldListValue } from './FieldList.interface'
import { Item, Responsive, Wrapper, Body } from './children'
import { useFieldContext } from '../../Field.context'
import { combineRefs } from '../../Field.constant'
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
  const { breakpoint, hasError, hasList, isDesktop, isFocused, isMobile, setBreakpoint, setHasList } = useFieldContext()
  const { value, toggleValue } = useFieldList({
    defaultValue,
    multiple,
    onChange,
    value: controlledValue
  })

  const listRef = useRef<HTMLDivElement>(null)
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
    if (!isFocused || hasError || !shadowRef.current || !listRef.current) return

    const updateShadow = () => {
      const list = listRef.current
      const shadow = shadowRef.current

      const fieldInput = list
        ?.closest('[data-lib="magneto-ui"][data-slot="field"]')
        ?.querySelector('[data-slot="field-input"]')
      // const fieldGroup = list?.closest('[data-slot="field-group"]')

      if (!list || !shadow || !fieldInput) return

      // const groupRect = fieldGroup?.getBoundingClientRect()
      const inputRect = fieldInput.getBoundingClientRect()
      const listRect = list.getBoundingClientRect()

      // shadow.style.width = `${groupRect?.width || inputRect?.width}px`
      shadow.style.width = `${inputRect.width}px`
      shadow.style.height = `${inputRect.height + listRect.height}px`
    }

    updateShadow()

    const resizeObserver = new ResizeObserver(updateShadow)
    if (listRef.current) resizeObserver.observe(listRef.current)

    // const fieldGroup = listRef.current?.closest('[data-slot="field-group"]')
    const field = listRef.current?.closest('.magneto-ui-field')?.querySelector('[data-slot="field-input"]')

    if (field) resizeObserver.observe(field as Element)

    window.addEventListener('scroll', updateShadow, true)
    window.addEventListener('resize', updateShadow)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('scroll', updateShadow, true)
      window.removeEventListener('resize', updateShadow)
    }
  }, [hasError, isFocused, isMobile])

  return (
    <ListContext.Provider value={{ isInsideList: true, toggleValue, value }}>
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
            isFocused ? 'magneto-ui-field-list--visible' : 'magneto-ui-field-list--hidden',
            hasError ? 'magneto-ui-field-list--error' : '',
            className
          )}
        >
          <div
            ref={shadowRef}
            className={cx(
              'magneto-ui-field-list-shadow',
              isFocused ? 'magneto-ui-field-list-shadow--visible' : 'magneto-ui-field-list-shadow--hidden'
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
