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
  maxCounterValue = 0,
  ...props
}) => {
  const [onFocus, setOnFocus] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const haveValueOrFocus = useMemo(() => {
    if (value !== null) return onFocus || value?.length > 0
  }, [onFocus, value])

  useEffect(() => {
    if (value && hasCounter) {
      setInputValue(value)
    }
  }, [hasCounter, value])

  const dinamyIcon = useMemo(() => {
    return {
      ['text']: DocumentTextGray,
      ['email']: Email,
      ['number']: Mobile
    }
  }, [])

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e)
      setInputValue(e.target.value)
    },
    [onChange]
  )

  return (
    <div style={{ height: 'auto', width: '100%' }}>
      <div className={styles[`${classMUI}-input`]}>
        <div>
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
              {...props}
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
              <img
                className={styles[`${classMUI}-input--container__icon`]}
                src={customIcon ? customIcon : dinamyIcon[type] || DocumentTextGray}
              />
            )}
          </div>
        </div>
      </div>
      <div className={styles[`${classMUI}-input__footer`]}>
        <span style={{ width: hasCounter ? '80%' : '100%' }} className={styles[`${classMUI}-input--container__error`]}>
          {error}
        </span>
        {hasCounter && <ComparativeCounter current={inputValue.length} max={maxCounterValue} />}
      </div>
    </div>
  )
}

export default Input
