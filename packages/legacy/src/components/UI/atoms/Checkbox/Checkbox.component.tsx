import React from 'react'
import { ICheckbox } from './Checkbox.interface'
import { classNames, stubTrue } from '@shared/utils/common'
import styles from './Checkbox.module.scss'

const cx = classNames.bind(styles)

const defaultCheck: ICheckbox['renderCheck'] = ({ type, checked }) => {
  if (type === 'background') return
  return (
    <div aria-checked={checked} role="checkbox" className={cx('checkbox__box', { 'checkbox__box--checked': checked })}>
      {checked ? <>&#x2713;</> : null}
    </div>
  )
}

const Component: React.FC<ICheckbox> = ({
  id,
  checked,
  onChange = stubTrue,
  children,
  type = 'box',
  className,
  display = 'inline',
  renderCheck = defaultCheck,
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
      {renderCheck({ checked, type })}
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
