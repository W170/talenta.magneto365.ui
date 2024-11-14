import React, { useState } from 'react'
import { ToggleButton } from '@components/UI/atoms'
import { IToggleButtonOnchangeValues } from '@components/UI/atoms/ToggleButton/ToggleButton.interface'
import { TToggleButtonList } from './ToggleButtonList.interface'
import styles from './ToggleButtonList.module.scss'

const Component: React.FC<TToggleButtonList> = ({ list, toggleButtonProps, onChange = () => ({}), className = '' }) => {
  const [selectedValue, setSelectedValue] = useState<IToggleButtonOnchangeValues | null>(null)

  const onHandleChange = (value: IToggleButtonOnchangeValues | null) => {
    if (!value?.name) return
    onChange(value)
    setSelectedValue(value)
  }

  return (
    <div className={`${className} ${styles['toggle-button-list']}`}>
      {list?.map(({ id = '', name = '', customIcon }) => (
        <ToggleButton
          {...toggleButtonProps}
          customIcon={customIcon}
          currentSelect={selectedValue?.id === id}
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
