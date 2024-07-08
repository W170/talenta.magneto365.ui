import React, { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { IInput } from './Input.interface'
import { classMUI } from '@constants/stories'
import styles from './Input.module.scss'
import { DocumentTextGray, Email, Mobile } from '@constants/icons.constants'
import { ComparativeCounter } from '@components/UI/atoms'

const Input: React.FC<IInput> = ({
  value = '',
  onChange,
  name,
  type,
  placeholder,
  customIcon,
  hideIcon = false,
  error,
  disabled = false,
  autoFocus = false,
  hasCounter = false,
  maxCounterValue = 0
}) => {
  const [onFocus, setOnFocus] = useState(false)
  const haveValueOrFocus = onFocus || value.length > 0
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if (value && hasCounter) {
      setInputValue(value)
    }
  }, [hasCounter, value])

  const dinamycIcon = useMemo(() => {
    switch (type) {
      case 'text':
        return DocumentTextGray
      case 'email':
        return Email
      case 'number':
        return Mobile

      default:
        return DocumentTextGray
    }
  }, [type])

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e)
      setInputValue(e.target.value)
    },
    [onChange]
  )

  return (
    <div className={styles[`${classMUI}-input`]}>
      <div className={styles[`${classMUI}-input--container`]}>
        <label
          htmlFor={name}
          style={{
            left: hideIcon ? '10px' : '40px',
            top: haveValueOrFocus ? '30%' : '45%',
            fontSize: haveValueOrFocus ? '12px' : '14px'
          }}
          className={styles[`${classMUI}-input--container__label`]}
        >
          {placeholder}
        </label>
        <input
          style={{
            padding: hideIcon ? '0px 10px' : '0px 40px'
          }}
          disabled={disabled}
          className={styles[`${classMUI}-input--container__input`]}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
          id={name}
          autoFocus={autoFocus}
          autoComplete="off"
        />

        {hideIcon ? null : (
          <img className={styles[`${classMUI}-input--container__icon`]} src={customIcon ? customIcon : dinamycIcon} />
        )}
      </div>
      <div className={styles[`${classMUI}-input__footer`]}>
        <span className={styles[`${classMUI}-input--container__error`]}>{error}</span>
        {hasCounter && <ComparativeCounter current={inputValue.length} max={maxCounterValue} />}
      </div>
    </div>
  )
}

export default Input
