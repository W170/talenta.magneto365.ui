import React from 'react'
import { IDateOption } from '@components/UI/atoms/DateOptions/DateOptions.interface'
import styles from './DateOptions.module.scss'

const Component: React.FC<IDateOption> = ({ optionsList, selected, handleOnClick }) => {
  const handleOptionClick = (optionValue: string | number) => {
    handleOnClick(optionValue)
  }

  return (
    <div className={styles['magneto-ui--date-options']}>
      <ul className={styles['magneto-ui--date-options--wrapper']}>
        {optionsList.map(({ optionValue, optionLabel }) => (
          <li
            className={`${styles['magneto-ui--date-options__btn']} ${
              selected === optionValue ? styles['magneto-ui--date-options__btn-selected'] : ''
            }`}
            key={optionValue}
            value={optionValue}
            onClick={() => handleOptionClick(optionValue)}
          >
            {optionLabel}
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 * UI Atom component of Date Option
 */

export const DateOptions = Component
