import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { IconItem, IOptionValues } from '@components/UI/atoms'
import { DateSelection } from '@components/UI/molecules/DateSelection'
import { IMobileDatePicker } from '@components/UI/organism/MobileDatePicker/MobileDatePicker.interface'
import styles from './MobileDatePicker.module.scss'
import { parseDate } from '@components/UI/molecules/DatePicker/utils'
import { ArrowDown2, ArrowDown3 } from '@constants/icons.constants'
import { monthOptionsValue, yearOptionsLabel, yearOptionsValue } from '@constants/stories/DatePicker.constants'

const defaultValue = (value: Date) => {
  return value ? parseDate(value) : { initialMonth: '', initialYear: '' }
}

const yearDateOptions: IOptionValues[] = yearOptionsLabel?.map((optionLabel, index) => ({
  optionValue: yearOptionsValue[index],
  optionLabel
}))

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
  value
}) => {
  const mainClass = 'magneto-ui--mobile-date-picker__container'
  const valueClass = '-value'
  const disabledClass = '-disabled'

  const [isMonthPickerOpen, setIsMonthPickerOpen] = useState(false)
  const [isYearPickerOpen, setIsYearPickerOpen] = useState(false)

  const [monthSelected, setMonthSelected] = useState<string | number | null>(defaultValue(value).initialMonth)
  const [yearSelected, setYearSelected] = useState<string | number | null>(defaultValue(value).initialYear)

  const FIRST_OF_MONTH = 1

  const componentClass = `${mainClass}${monthSelected === 0 || monthSelected || yearSelected ? valueClass : ''}${
    disabled ? disabledClass : ''
  }`.trim()

  const placeholderClass = `${mainClass}${
    monthSelected === 0 || monthSelected || yearSelected ? '-value--placeholder-shrink' : '--placeholder'
  }`

  const iconClass = `${mainClass}${monthSelected === 0 || monthSelected || yearSelected ? '-value__icon' : '__icon'}${
    disabled ? '--disabled' : ''
  }`

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
    if (monthSelected != '') {
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
        <span className={styles[`${placeholderClass}`]}>{monthPlaceholder}</span>
        <p className={styles['magneto-ui--mobile-date-picker__value']}>
          {monthSelected !== null ? getMonthName(monthSelected) : ''}
        </p>
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
        <span className={styles[`${placeholderClass}`]}>{yearPlaceholder}</span>
        <p className={styles['magneto-ui--mobile-date-picker__value']}>{yearSelected}</p>
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
