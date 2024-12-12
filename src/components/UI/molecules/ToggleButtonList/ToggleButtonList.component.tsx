import React, { useEffect, useState } from 'react'
import { ToggleButton } from '@components/UI/atoms'
import { IToggleButtonOnchangeValues } from '@components/UI/atoms/ToggleButton/ToggleButton.interface'
import { TToggleButtonList } from './ToggleButtonList.interface'
import styles from './ToggleButtonList.module.scss'

const Component: React.FC<TToggleButtonList> = ({
  list,
  toggleButtonProps,
  onChange = () => ({}),
  className = '',
  currentSelect
}) => {
  const [valueSelected, setValueSelected] = useState<IToggleButtonOnchangeValues>()

  useEffect(() => {
    if (currentSelect) {
      onChange(currentSelect)
    }
  }, [currentSelect, onChange])

  const onHandleChange = (value: IToggleButtonOnchangeValues | null) => {
    if (!value?.name) return
    onChange(value)
    setValueSelected(value)
  }

  const valueHasSelected = (id: number) => {
    if (valueSelected) {
      return valueSelected.id === id
    }
    if (currentSelect) {
      return currentSelect.id === id
    }
    return false
  }

  return (
    <div className={`${className} ${styles['toggle-button-list']}`}>
      {list?.map(({ id = '', name = '', customIcon }) => (
        <ToggleButton
          {...toggleButtonProps}
          customIcon={customIcon}
          currentSelect={valueHasSelected(+id)}
          key={id}
          id={id}
          name={name}
          onChange={onHandleChange}
        />
      ))}
    </div>
  )
}

export const ToggleButtonList = Component
