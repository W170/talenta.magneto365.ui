import React, { useState } from 'react'
import { IOptionValues, DateDropdown } from '@components/UI/atoms/DateDropdown'
import { IDatePicker } from './DatePicker.interface'
import styles from './DatePicker.module.scss'

const Component: React.FC<IDatePicker> = ({
  monthOptionsValue,
  monthOptionsLabels,
  yearOptionsValue,
  yearOptionsLabel,
  monthPlaceholder,
  yearPlaceholder,
  disabledDate
}) => {
  const [selectedMonthOption, setSelectedOptionOne] = useState('')
  const [selectedYearOption, setSelectedOptionTwo] = useState('')
  const FIRST_OF_MONTH = 1

  const monthOptionsList: IOptionValues[] = monthOptionsLabels
    ?.map((optionLabel, index) => ({
      optionValue: monthOptionsValue[index],
      optionLabel
    }))
    .filter(({ optionLabel }) => !!optionLabel)
    .slice(0, 12)

  const yearOptionsList: IOptionValues[] = yearOptionsLabel?.map((optionLabel, index) => ({
    optionValue: yearOptionsValue[index],
    optionLabel
  }))

  const onOptionMonthChanged = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptionOne(event.target.value)
  }

  const onOptionYearChanged = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptionTwo(event.target.value)
  }

  const composeDate = () => {
    return new Date(`${selectedMonthOption}/${FIRST_OF_MONTH}/${selectedYearOption}`)
  }

  console.log(composeDate())

  return (
    <div className={styles['magneto-ui--date-picker__wrapper']}>
      <DateDropdown
        dateOptions={monthOptionsList}
        placeholderLabel={monthPlaceholder}
        selectedOption={selectedMonthOption}
        onOptionChanged={onOptionMonthChanged}
        disabled={disabledDate}
      />
      <DateDropdown
        dateOptions={yearOptionsList}
        placeholderLabel={yearPlaceholder}
        selectedOption={selectedYearOption}
        onOptionChanged={onOptionYearChanged}
        disabled={disabledDate}
      />
      <button onClick={composeDate}>Enviar fecha</button>
    </div>
  )
}

export const DatePicker = Component
