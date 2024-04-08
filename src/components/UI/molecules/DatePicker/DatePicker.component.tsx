import React, { useEffect, useState } from 'react'
import { DateDropdown, IOptionValues } from '@components/UI/atoms/DateDropdown'
import { monthOptionsValue, yearOptionsLabel, yearOptionsValue } from '@constants/stories/DatePicker.constants'
import { parseDate } from '@components/UI/molecules/DatePicker/utils'
import { IDatePicker } from './DatePicker.interface'
import styles from './DatePicker.module.scss'
const defaultValue = (value: Date) => {
  return value ? parseDate(value) : { initialMonth: '', initialYear: '' }
}

const yearOptionsList: IOptionValues[] = yearOptionsLabel?.map((optionLabel, index) => ({
  optionValue: yearOptionsValue[index],
  optionLabel
}))
const Component: React.FC<IDatePicker> = ({
  monthOptionsLabels,
  monthPlaceholder,
  yearPlaceholder,
  value,
  disabled,
  onChange
}) => {
  const { initialMonth, initialYear } = defaultValue(value)

  const [selectedMonth, setSelectedMonth] = useState<string>(initialMonth)
  const [selectedYear, setSelectedYear] = useState<string>(initialYear)
  const FIRST_OF_MONTH = 1

  const monthOptionsList: IOptionValues[] = monthOptionsLabels?.map((optionLabel, index) => ({
    optionValue: monthOptionsValue[index],
    optionLabel
  }))

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(event.target.value)
  }

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value)
  }

  useEffect(() => {
    if (selectedMonth !== initialMonth && selectedYear !== initialYear) {
      if (disabled) {
        onChange(null)
      } else if (selectedMonth !== '' && selectedYear !== '') {
        onChange(new Date(Number(selectedYear), Number(selectedMonth), FIRST_OF_MONTH))
      }
    }
  }, [disabled, initialMonth, initialYear, onChange, selectedMonth, selectedYear])

  useEffect(() => {
    if (disabled) {
      setSelectedMonth('')
      setSelectedYear('')
    }
  }, [disabled])

  return (
    <div className={styles['magneto-ui--date-picker__wrapper']}>
      <DateDropdown
        placeholderLabel={monthPlaceholder}
        dateOptions={monthOptionsList}
        selectedOption={selectedMonth}
        onOptionChanged={handleMonthChange}
        disabled={disabled}
      />
      <DateDropdown
        placeholderLabel={yearPlaceholder}
        dateOptions={yearOptionsList}
        selectedOption={selectedYear}
        onOptionChanged={handleYearChange}
        disabled={disabled}
      />
    </div>
  )
}
export const DatePicker = Component
