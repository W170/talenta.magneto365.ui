import React, { forwardRef, useMemo } from 'react'
import { classNames } from '@shared/utils/common'
import { useFieldListContext } from '../../FieldList.context'
import { IFieldListItem } from './FieldListItem.interface'
import styles from './FieldListItem.module.scss'

const cx = classNames.bind(styles)

function BaseComponent<T>(
  { children, className, value: controlledValue, ...props }: IFieldListItem<T>,
  ref: React.ForwardedRef<HTMLLIElement>
) {
  const { value, toggleValue } = useFieldListContext()

  const isSelected = useMemo(() => {
    if (!controlledValue) return false

    if (Array.isArray(value)) {
      return value.some((v) => JSON.stringify(v) === JSON.stringify(controlledValue))
    }

    return JSON.stringify(controlledValue) === JSON.stringify(value)
  }, [controlledValue, value])

  return (
    <li
      {...props}
      className={cx('magneto-ui-field-list-item', isSelected ? 'magneto-ui-field-list-item--selected' : '', className)}
      onClick={() => toggleValue(controlledValue)}
      data-lib="magneto-ui"
      data-slot="field-list-item"
      ref={ref}
    >
      {children}
    </li>
  )
}

const Component = forwardRef(BaseComponent) as <T>(
  props: IFieldListItem<T> & { ref?: React.ForwardedRef<HTMLLIElement> }
) => ReturnType<typeof BaseComponent>

/**
 * Atom UI of field. It includes .
 */
export const FieldListItem = Object.assign(Component, {})
