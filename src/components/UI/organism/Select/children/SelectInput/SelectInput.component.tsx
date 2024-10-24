import React, { ChangeEvent, useEffect, useRef } from 'react'
import { Input } from '@components/UI/molecules'
import { ISelectInput } from './SelectInput.interface'
import { ArrowDown2 } from '@constants/icons.constants'
import { classNames } from '@shared/utils/common'
import { IValueSelect } from '../../Select.interface'
import { generateID } from '@utils/generateID/generateID.util'
import { IconItem } from '@components/UI/atoms'
import styles from './SelectInput.module.scss'

const cx = classNames.bind(styles)

const getDefaulSelected = <T,>(selected: IValueSelect<T>[]) => {
  return selected.map((select) => select.value).join(', ')
}

const Component = <T,>({
  onChange,
  value,
  className,
  onClick,
  open = false,
  actionIcon = ArrowDown2,
  selected,
  getLabel = getDefaulSelected,
  readOnly,
  disabled,
  ...rest
}: ISelectInput<T>) => {
  const ref = useRef({ onChange, id: generateID() })

  useEffect(() => {
    ref.current.onChange = onChange
  }, [onChange])

  useEffect(() => {
    if (!open)
      ref.current.onChange({
        target: {
          value: ''
        }
      } as ChangeEvent<HTMLInputElement>)
  }, [open])

  if (!readOnly) {
    return (
      <div
        className={cx('select-input', className, {
          'select-input--with-icon': actionIcon !== undefined,
          'select-input--no-placeholder': rest.placeholder.length === 0,
          'select-input--disabled': disabled
        })}
        onClick={() => (disabled ? null : onClick())}
        data-name="select-input"
        data-selected={selected.length > 0}
        data-is-open={open}
      >
        <Input
          name={ref.current.id}
          disabled={disabled}
          value={open ? value : getLabel(selected)}
          onChange={onChange}
          actionIcon={actionIcon}
          {...rest}
        />
      </div>
    )
  }

  return (
    <button
      className={cx('select-button', { 'select-button--disabled': disabled }, className)}
      disabled={disabled}
      onClick={onClick}
      data-name="select-button"
      data-selected={selected.length > 0}
      data-is-open={open}
    >
      <div className={cx('select-button__input')}>
        {rest.placeholder.length > 0 ? (
          <span
            className={cx('select-button__placeholder', {
              'select-button__placeholder--open': open,
              'select-button__placeholder--selected': selected.length > 0
            })}
          >
            {rest.placeholder}
          </span>
        ) : null}
        {selected.length > 0 ? (
          <span
            className={cx('select-button__value', {
              'select-button__placeholder--open': open
            })}
          >
            {getLabel(selected)}
          </span>
        ) : null}
      </div>
      {actionIcon ? <IconItem icon={actionIcon} size={20} /> : null}
    </button>
  )
}

export const SelectInput = Component
