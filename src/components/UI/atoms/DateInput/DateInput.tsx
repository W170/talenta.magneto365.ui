import React, { useEffect, useState } from 'react'
import { IDateInput } from './DateInput.interface'
import styles from './DateInput.module.scss'
import { formatDateInputRegex, notNumberRegex } from '@shared/utils/common'

const format = 'DD / MM / AAAA'

const labelfontsClass = {
  monospace: 'date-input__label--monospace',
  courier: 'date-input__label--courier',
  lato: 'date-input__label--lato',
  lucida: 'date-input__label--lucida'
}

const inputfontsClass = {
  monospace: 'date-input__input--monospace',
  courier: 'date-input__input--courier',
  lato: 'date-input__input--lato',
  lucida: 'date-input__input--lucida'
}

const Component: React.FC<IDateInput> = ({ onChange = () => null, value, font = 'monospace' }) => {
  const [internalValue, setInternalValue] = useState('')

  const handleOnChange = (value: string) => {
    const numbers = value.replace(notNumberRegex, '')

    if (numbers.length > 8) return

    const newValue = numbers
      .split('')
      .map((num, index) => {
        if ([2, 4].includes(index)) {
          return ` / ${num}`
        }

        return num
      })
      .join('')

    setInternalValue(newValue)

    if (formatDateInputRegex.test(newValue)) {
      const [, day, month, year] = formatDateInputRegex.exec(newValue) ?? []
      console.log(new Date(`${year}-${month}-${day}`))
      onChange(new Date(`${year}-${month}-${day}`))
    }
  }

  useEffect(() => {
    if (value != null) {
      const formattedDate = `${value.getDate()}-${value.getMonth() + 1}-${value.getFullYear()}`
      setInternalValue(formattedDate)
    }
  }, [value])
  return (
    <div className={styles['date-input']}>
      <label htmlFor="date-input" className={[styles['date-input__label'], styles[labelfontsClass[font]]].join(' ')}>
        {format.replace(new RegExp(`^.{0,${internalValue.length}}`), '')}
      </label>
      <input
        id="date-input"
        className={[styles['date-input__input'], styles[inputfontsClass[font]]].join(' ')}
        onChange={(e) => handleOnChange(e.target.value)}
        value={internalValue}
      />
    </div>
  )
}

export const DateInput = Component
