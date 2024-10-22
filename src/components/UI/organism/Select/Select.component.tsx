import React, { useState } from 'react'
import { SelectContext, useSelectContext } from './Select.context'
import { ISelect } from './Select.interface'
import { ArrowDown2 } from '@constants/icons.constants'
import { SelectInput } from './children/SelectInput/SelectInput.component'
import { classNames, stubTrue } from '@shared/utils/common'
import styles from './Select.module.scss'
import { ISelectInput } from './children/SelectInput/SelectInput.interface'

const cx = classNames.bind(styles)

const defaultSelect = <T,>(props: ISelectInput<T>) => {
  return <Select.Input hideIcon actionIcon={ArrowDown2} {...props} />
}

const Component = <T,>({
  children,
  renderSelect = defaultSelect,
  placeholder = '',
  options,
  value,
  onChange = stubTrue,
  inputReadonly = false
}: ISelect<T>) => {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')

  return (
    <SelectContext.Provider value={{ options, value, onSwitch: setOpen, onChange, search, open, onSearch: setSearch }}>
      {renderSelect({
        placeholder,
        readOnly: inputReadonly,
        onChange: ({ target }) => setSearch(target.value),
        type: 'text',
        value: search,
        open,
        onClick: () => setOpen(true),
        selected: value
      })}
      <div className={cx('select__list-container')} data-name="select-list-container">
        {children}
      </div>
    </SelectContext.Provider>
  )
}

/**
 * @experimental this component is early, so that the interface component and behavrior could change.
 * @deprecated this function will change soon.
 */
export const Select = Object.assign(Component, { useContext: useSelectContext, Input: SelectInput })
