import React, { forwardRef, useMemo } from 'react'
import { classNames } from '@shared/utils/common'
import { useFieldListContext } from '../../FieldList.context'
import { IFieldListItem } from './FieldListItem.interface'
import styles from './FieldListItem.module.scss'

const cx = classNames.bind(styles)

function BaseComponent<T>(
  { children, className, value, ...props }: IFieldListItem<T>,
  ref: React.ForwardedRef<HTMLLIElement>
) {
  const { selected, toggleValue } = useFieldListContext()

  const isSelected = useMemo(() => {
    if (!value) return false

    if (Array.isArray(selected)) {
      return selected.some((v) => JSON.stringify(v) === JSON.stringify(value))
    }

    return JSON.stringify(selected) === JSON.stringify(value)
  }, [selected, value])

  return (
    <li
      {...props}
      className={cx('magneto-ui-field-list-item', isSelected ? 'magneto-ui-field-list-item--selected' : '', className)}
      onClick={() => toggleValue(value)}
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
