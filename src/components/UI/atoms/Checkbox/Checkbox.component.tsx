import React from 'react'
import { ICheckbox } from './Checkbox.interface'
import { classNames, stubTrue } from '@shared/utils/common'
import styles from './Checkbox.module.scss'

const cx = classNames.bind(styles)

const Component: React.FC<ICheckbox> = ({
  id,
  checked,
  onChange = stubTrue,
  children,
  type = 'box',
  className,
  display = 'inline',
  ...rest
}) => {
  return (
    <label
      className={cx('checkbox', `checkbox--${display}`, className, {
        'checkbox--checked': checked,
        'checkbox--background': type === 'background'
      })}
      data-name="checkbox-container"
      htmlFor={id}
    >
      <input
        data-name="checkbox"
        checked={checked}
        onChange={({ target }) => onChange(target.checked)}
        type="checkbox"
        id={id}
        {...rest}
      />
      {children}
    </label>
  )
}

export const Checkbox = Component
