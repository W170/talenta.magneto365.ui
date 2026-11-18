import React, { forwardRef, useCallback, useEffect, useRef } from 'react'
import { IFieldListWrapper } from './FieldListWrapper.interface'
import { useFieldContext } from '../../../../Field.context'
import { combineRefs } from '../../../../Field.constant'
import styles from './FieldListWrapper.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const BaseComponent = (
  { children, className, nonRelative, onBlur: controlledOnBlur, tabIndex, ...props }: IFieldListWrapper,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const { isFocused, isMobile, wrapperRef, onBlur, setIsFocused } = useFieldContext()
  const nodeRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!isFocused || isMobile) return

    const closeOnOutsideMouseDown = (event: MouseEvent) => {
      const field = nodeRef.current?.closest('[data-slot="field"]')
      if (event.target instanceof Node && field?.contains(event.target)) return

      setIsFocused(false)
    }

    document.addEventListener('mousedown', closeOnOutsideMouseDown, true)

    return () => document.removeEventListener('mousedown', closeOnOutsideMouseDown, true)
  }, [isFocused, isMobile, setIsFocused])

  const handleOnBlur = useCallback(
    (evt: React.FocusEvent<HTMLInputElement>) => {
      onBlur(evt, ref || wrapperRef)
      controlledOnBlur?.(evt)
    },
    [controlledOnBlur, onBlur, ref, wrapperRef]
  )

  return (
    <div
      {...props}
      tabIndex={tabIndex || -1}
      className={cx(
        'magneto-ui-field-list-wrapper',
        nonRelative ? 'magneto-ui-field-list-wrapper--non-relative' : '',
        className
      )}
      onBlur={handleOnBlur}
      data-lib="magneto-ui"
      data-slot="field-list-wrapper"
      data-state={nonRelative ? 'non-relative' : 'relative'}
      ref={(node) => combineRefs(node, nodeRef, ref || wrapperRef)}
    >
      {React.Children.map(children, (child) => (typeof child === 'function' ? child({ isMobile }) : child))}
    </div>
  )
}

const Component = forwardRef<HTMLDivElement, IFieldListWrapper>(BaseComponent)

/**
 * Atom UI of field. It includes .
 */
export const FieldListWrapper = Object.assign(Component, {})
