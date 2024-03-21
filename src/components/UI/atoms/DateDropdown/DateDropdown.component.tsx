import React, { useMemo } from 'react'
import { IconItem } from '@components/UI/atoms'
import { IDateDropdown } from './DateDropdown.interface'
import styles from './DateDropdown.module.scss'
import { ArrowDown3, ArrowDown4 } from '@constants/icons.constants'

const Component: React.FC<IDateDropdown> = ({
  placeholderLabel,
  dateOptions,
  selectedOption,
  onOptionChanged,
  disabled = false
}) => {
  const disabledArrow = useMemo(() => {
    if (disabled) return <IconItem icon={ArrowDown4} alt="arrow-icon" size={24} />

    return <IconItem icon={ArrowDown3} alt="arrow-icon" size={24} />
  }, [disabled])

  return (
    <div className={styles['magneto-ui--date-dropdown__wrapper']}>
      <select
        className={styles[`magneto-ui--date-dropdown__select`]}
        value={selectedOption}
        onChange={onOptionChanged}
        defaultValue={placeholderLabel}
        disabled={disabled}
      >
        <option className={styles['magneto-ui--date-dropdown__option']} value="" disabled>
          {placeholderLabel}
        </option>
        {dateOptions?.map(({ optionValue, optionLabel }) => (
          <option className={styles['magneto-ui--date-dropdown__option']} key={optionValue} value={optionValue}>
            {optionLabel}
          </option>
        ))}
      </select>
      <span className={styles['magneto-ui--date-dropdown__icon']}>{disabledArrow}</span>
    </div>
  )
}

export const DateDropdown = Component
