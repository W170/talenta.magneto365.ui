import React, { useEffect, useState, useRef } from 'react'
import { isDate, isInvalidDate, notNumberRegex } from '../../../../shared/utils/common'
import { IDateInput } from './DateInput.interface'
import styles from './DateInput.module.scss'

// placeholder to every input.
const placeholder = ['D', 'D', 'M', 'M', 'A', 'A', 'A', 'A']

const stringArraytoDate = (array: string[]) => {
  const [d1, d2, m1, m2, ...year] = array
  return new Date(Number(year.join('')), Number(`${m1}${m2}`) - 1, Number(`${d1}${d2}`))
}

const Component: React.FC<IDateInput> = ({
  className = '',
  value,
  onChange = () => null,
  fit = false,
  hasError = false
}) => {
  // Represent the value of every input field (there are 8 in total).
  const [internalValues, setInternalValues] = useState<string[]>(Array(8).fill(''))
  // An array of references of every input field.
  const inputsRef = useRef<Array<HTMLInputElement | null>>([])
  // Last value emited to onChange function
  const lastValueEmitedRef = useRef(value)

  const handleEmit = (value: IDateInput['value']) => {
    if (isDate(value)) {
      lastValueEmitedRef.current = value
      return onChange(value)
    }

    if (isInvalidDate(value)) {
      lastValueEmitedRef.current = value
      return onChange(NaN)
    }

    if (value !== lastValueEmitedRef.current) {
      lastValueEmitedRef.current = value
      return onChange(value)
    }
  }

  const handleChange = (index: number, value: string) => {
    const newValues = [...internalValues]
    newValues[index] = value.slice(-1)
    setInternalValues(newValues)

    // Focus the next input
    if (value && index < internalValues.length - 1) {
      inputsRef.current[index + 1]?.focus()
    }

    if (newValues.join('').length === 8) {
      handleEmit(stringArraytoDate(newValues))
    } else {
      handleEmit(undefined)
    }
  }

  const handleKeyDown = (index: number, key: string) => {
    if (key === 'Backspace' && !internalValues[index] && index > 0) {
      const newValues = [...internalValues]
      newValues[index - 1] = ''
      setInternalValues(newValues)
      inputsRef.current[index - 1]?.focus()
      handleEmit(undefined)
    } else if (key === 'Backspace' && internalValues[index] && index > 0) {
      const newValues = [...internalValues]
      newValues[index] = ''
      setInternalValues(newValues)
      handleEmit(undefined)
    } else if (key === 'ArrowLeft' && index > 0) {
      inputsRef.current[index - 1]?.focus()
    } else if (key === 'ArrowRight' && index < internalValues.length - 1) {
      inputsRef.current[index + 1]?.focus()
    }
  }

  const handlePaste = (index: number, event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault()
    const pasteData = event.clipboardData
      ?.getData('text')
      .replace(notNumberRegex, '')
      .slice(0, internalValues.length - index)

    if (pasteData == undefined) return

    const newValues = [...internalValues]

    for (let i = 0; i < pasteData.length; i++) {
      newValues[index + i] = pasteData[i]
    }

    setInternalValues(newValues)

    if (index + pasteData.length - 1 < internalValues.length) {
      inputsRef.current[index + pasteData.length - 1]?.focus()
    }

    if (newValues.join('').length === 8) {
      handleEmit(stringArraytoDate(newValues))
    }
  }

  useEffect(() => {
    if (value === null) {
      setInternalValues(Array(8).fill(''))
    } else if (isDate(value)) {
      const day = String(value.getDate()).padStart(2, '0').split('')
      const month = String(value.getMonth() + 1)
        .padStart(2, '0')
        .split('')
      const year = value.getFullYear().toString().padStart(4, '0').split('')
      setInternalValues([...day, ...month, ...year])
    }
  }, [value])

  return (
    <div
      className={[
        styles['date-input'],
        className,
        fit ? styles['date-input--fit'] : '',
        hasError ? styles['date-input--error'] : ''
      ].join(' ')}
    >
      {internalValues.map((value, index) => (
        <React.Fragment key={index}>
          {[2, 4].includes(index) ? (
            // include / separator in date (DD / MM / YYYY)
            <span
              className={[styles['date-input__separator'], value ? styles['date-input__separator--filled'] : ''].join(
                ' '
              )}
            >
              /
            </span>
          ) : null}
          <input
            className={styles['date-input__input']}
            type="text"
            maxLength={1}
            value={value}
            placeholder={placeholder[index]}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e.key)}
            onPaste={(e) => handlePaste(index, e)}
            ref={(el) => (inputsRef.current[index] = el)}
          />
        </React.Fragment>
      ))}
    </div>
  )
}

export const DateInput = Component
