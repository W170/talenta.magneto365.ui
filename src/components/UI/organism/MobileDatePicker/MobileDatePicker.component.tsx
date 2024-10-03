import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { IconItem, IOptionValues } from '@components/UI/atoms'
import { DateSelection } from '@components/UI/molecules/DateSelection'
import { IMobileDatePicker } from '@components/UI/organism/MobileDatePicker/MobileDatePicker.interface'
import styles from './MobileDatePicker.module.scss'
import { generateYearArray, parseDate } from '@components/UI/molecules/DatePicker/utils'
import { ArrowDown2, ArrowDown3 } from '@constants/icons.constants'
import { monthOptionsValue } from '@constants/stories/DatePicker.constants'

const defaultValue = (value?: Date) => {
  return value ? parseDate(value) : { initialMonth: '', initialYear: '' }
}

const Component: React.FC<IMobileDatePicker> = ({
  applyLabel,
  cancelLabel,
  disabled,
  monthsLabels,
  monthPlaceholder,
  yearPlaceholder,
  onChange,
  selectionMonthHeader,
  selectionYearHeader,
  value,
  futureYears,
  pastYears
}) => {
  const mainClass = 'magneto-ui--mobile-date-picker__container'
  const valueClass = '-value'
  const disabledClass = '-disabled'

  const [isMonthPickerOpen, setIsMonthPickerOpen] = useState(false)
  const [isYearPickerOpen, setIsYearPickerOpen] = useState(false)

  const [monthSelected, setMonthSelected] = useState<string | number | null>(defaultValue(value).initialMonth)
  const [yearSelected, setYearSelected] = useState<string | number | null>(defaultValue(value).initialYear)

  const { yearsArrayToString, yearsArray } = generateYearArray(futureYears, pastYears)

  const yearDateOptions: IOptionValues[] = yearsArrayToString?.map((optionLabel, index) => ({
    optionValue: yearsArray[index],
    optionLabel
  }))

  const FIRST_OF_MONTH = 1

  const FALSY_VALUE_VALIDATION = monthSelected === 0 || monthSelected || yearSelected

  const componentClass = `${mainClass}${FALSY_VALUE_VALIDATION ? valueClass : ''}${
    disabled ? disabledClass : ''
  }`.trim()

  const placeholderClass = `${mainClass}${FALSY_VALUE_VALIDATION ? '-value--placeholder-shrink' : '--placeholder'}`

  const iconClass = `${mainClass}${FALSY_VALUE_VALIDATION ? '-value__icon' : '__icon'}${disabled ? '--disabled' : ''}`

  const monthDateOptions: IOptionValues[] = monthsLabels?.map((optionLabel, index) => ({
    optionValue: monthOptionsValue[index],
    optionLabel
  }))

  const getMonthName = (monthIndex: string | number | undefined) => {
    return monthsLabels[monthIndex as number]
  }

  const toggleMonthPicker = useCallback(() => {
    if (!disabled) {
      setIsMonthPickerOpen(true)
    }
  }, [disabled])

  const toggleYearPicker = useCallback(() => {
    if (!disabled) {
      setIsYearPickerOpen(true)
    }
  }, [disabled])

  const onClose = useCallback(() => {
    setIsMonthPickerOpen(false)
    setIsYearPickerOpen(false)
  }, [])

  const disabledArrow = useMemo(() => {
    if (disabled) return <IconItem icon={ArrowDown2} alt="arrow-icon" size={24} />
    return <IconItem icon={ArrowDown3} alt="arrow-icon" size={24} />
  }, [disabled])

  const handleMonthDateSelection = (monthSelected: string | number | null) => {
    setMonthSelected(monthSelected)
    if (yearSelected != '') {
      onChange(new Date(Number(yearSelected), Number(monthSelected), FIRST_OF_MONTH))
    }
  }

  const handleYearDateSelection = (yearSelected: string | number | null) => {
    setYearSelected(yearSelected)
    if (monthSelected !== '') {
      onChange(new Date(Number(yearSelected), Number(monthSelected), FIRST_OF_MONTH))
    }
  }

  useEffect(() => {
    if (disabled) {
      setMonthSelected('')
      setYearSelected('')
      onChange(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled])

  return (
    <section className={styles['magneto-ui--mobile-date-picker']}>
      <div className={styles[`${componentClass}`]} onClick={toggleMonthPicker}>
        <div className={styles['magneto-ui--mobile-date-picker__input']}>
          <span className={styles[`${placeholderClass}`]}>{monthPlaceholder}</span>
          <p className={styles['magneto-ui--mobile-date-picker__value']}>
            {monthSelected !== null ? getMonthName(monthSelected) : ''}
          </p>
        </div>
        <span className={styles[`${iconClass}`]}>{disabledArrow}</span>
      </div>
      <DateSelection
        applyLabel={applyLabel}
        cancelLabel={cancelLabel}
        dateOptions={monthDateOptions}
        disabled={disabled}
        isOpen={isMonthPickerOpen}
        selectionHeader={selectionMonthHeader}
        onClose={onClose}
        onApplyCallback={handleMonthDateSelection}
        initialValue={monthSelected}
      />
      <div className={styles[`${componentClass}`]} onClick={toggleYearPicker}>
        <div className={styles['magneto-ui--mobile-date-picker__input']}>
          <span className={styles[`${placeholderClass}`]}>{yearPlaceholder}</span>
          <p className={styles['magneto-ui--mobile-date-picker__value']}>{yearSelected}</p>
        </div>
        <span className={styles[`${iconClass}`]}>{disabledArrow}</span>
      </div>
      <DateSelection
        applyLabel={applyLabel}
        cancelLabel={cancelLabel}
        dateOptions={yearDateOptions}
        disabled={disabled}
        isOpen={isYearPickerOpen}
        selectionHeader={selectionYearHeader}
        onClose={onClose}
        onApplyCallback={handleYearDateSelection}
        initialValue={yearSelected}
      />
    </section>
  )
}

export const MobileDatePicker = Component
