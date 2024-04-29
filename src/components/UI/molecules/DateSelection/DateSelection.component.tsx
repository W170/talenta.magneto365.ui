import React, { useState } from 'react'
import { DateOptions } from '@components/UI/atoms/DateOptions'
import { MobileDrawer } from '@components/UI/molecules'
import { IDateSelection } from '@components/UI/molecules/DateSelection/DateSelection.interface'
import styles from './DateSelection.module.scss'

const Component: React.FC<IDateSelection> = ({
  isOpen,
  onClose,
  selectionHeader,
  cancelSelection,
  applySelection,
  dateOptions
}) => {
  const [selectedOption, setSelectedOption] = useState<string | number | null>(null)

  const handleOptionClick = (optionValue: string | number) => {
    setSelectedOption(optionValue)
  }

  const onCancelClick = () => {
    console.log('Cierro')
  }
  const onApplyClick = () => {
    console.log('Apply')
  }

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
          {cancelSelection}
        </button>
        <button className={styles['magneto-ui--date-selection__apply-btn']} onClick={onApplyClick}>
          {applySelection}
        </button>
      </div>
    </MobileDrawer>
  )
}

export const DateSelection = Component
