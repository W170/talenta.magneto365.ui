import React, { useEffect, useState } from 'react'
import { DateOptions } from '@components/UI/atoms/DateOptions'
import { MobileDrawer } from '@components/UI/molecules'
import { IDateSelection } from '@components/UI/molecules/DateSelection/DateSelection.interface'
import styles from './DateSelection.module.scss'

const Component: React.FC<IDateSelection> = ({
  applyLabel,
  cancelLabel,
  dateOptions,
  disabled,
  isOpen,
  onClose,
  onApplyCallback,
  selectionHeader,
  initialValue
}) => {
  const [initialSelectedOption, setInitialSelectedOption] = useState<string | number | null>(initialValue)
  const [selectedOption, setSelectedOption] = useState<string | number | null>(initialValue)

  const handleOptionClick = (optionValue: string | number) => {
    setSelectedOption(optionValue)
  }

  const onCancelClick = () => {
    setSelectedOption(initialSelectedOption)
    onClose()
  }

  const onApplyClick = () => {
    setInitialSelectedOption(selectedOption)
    onApplyCallback(selectedOption)
    onClose()
  }

  useEffect(() => {
    if (disabled) {
      setSelectedOption(null)
      setInitialSelectedOption(null)
    }
  }, [disabled])

  return (
    <MobileDrawer isOpen={isOpen} onClose={onClose}>
      <div className={styles['magneto-ui--date-selection__header']}>
        <h2>{selectionHeader}</h2>
      </div>
      <div className={styles['magneto-ui--date-selection__options']}>
        <DateOptions handleOnClick={handleOptionClick} optionsList={dateOptions} selected={selectedOption} />
      </div>
      <div className={styles['magneto-ui--date-selection__btn--wrapper']}>
        <button className={styles['magneto-ui--date-selection__cancel-btn']} onClick={onCancelClick}>
          {cancelLabel}
        </button>
        <button className={styles['magneto-ui--date-selection__apply-btn']} onClick={onApplyClick}>
          {applyLabel}
        </button>
      </div>
    </MobileDrawer>
  )
}

export const DateSelection = Component
