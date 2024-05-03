import React, { useCallback, useMemo, useState } from 'react'
import { DateSelection } from '@components/UI/molecules/DateSelection'
import { IconItem } from '@components/UI/atoms'
import { ArrowDown2, ArrowDown3 } from '@constants/icons.constants'
import { IMobileDatePicker } from '@components/UI/organism/MobileDatePicker/MobileDatePicker.interface'
import styles from './MobileDatePicker.module.scss'

const Component: React.FC<IMobileDatePicker> = ({
  dateOptions,
  disabled,
  selectionHeader,
  cancelLabel,
  applyLabel
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const [monthSelected, setMonthSelected] = useState<string | number | null>()
  const [yearSelected, setYearSelected] = useState<string | number | null>()

  const toggleIsOpen = useCallback(() => {
    setIsOpen(true)
  }, [])

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const disabledArrow = useMemo(() => {
    if (disabled)
      return (
        <IconItem
          className={styles['magneto-ui--mobile-date-picker__icon']}
          icon={ArrowDown2}
          alt="arrow-icon"
          size={24}
        />
      )
    return <IconItem icon={ArrowDown3} alt="arrow-icon" size={24} />
  }, [disabled])

  const handleDateSelection = (selectedOption: string | number | null) => {
    setMonthSelected(selectedOption)
    setYearSelected(selectedOption)
  }

  return (
    <section className={styles['magneto-ui--mobile-date-picker']}>
      <div
        className={`${styles['magneto-ui--mobile-date-picker__container']} ${
          monthSelected ? styles['placeholder-shrink'] : ''
        }`}
        onClick={toggleIsOpen}
      >
        <span className={`${styles['placeholder-text']} ${monthSelected ? styles['placeholder-up'] : ''}`}>
          {'Mes'}
        </span>
        {monthSelected}
        {yearSelected}
        <span className={styles['magneto-ui--mobile-date-picker__icon']}>{disabledArrow}</span>
      </div>
      <DateSelection
        applyLabel={applyLabel}
        cancelLabel={cancelLabel}
        dateOptions={dateOptions}
        isOpen={isOpen}
        selectionHeader={selectionHeader}
        onClose={onClose}
        onApplyCallback={handleDateSelection}
      />
      <div className={styles['magneto-ui--mobile-date-picker__container']}>
        {yearSelected}
        2021
        <span className={styles['magneto-ui--mobile-date-picker__icon']}>{disabledArrow}</span>
      </div>
    </section>
  )
}

export const MobileDatePicker = Component
