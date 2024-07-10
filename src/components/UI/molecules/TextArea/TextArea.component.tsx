import React, { ChangeEvent, UIEventHandler, useCallback, useEffect, useState } from 'react'
import { ITextArea } from './TextArea.interface'
import { classMUI } from '@constants/stories'
import styles from './TextArea.module.scss'
import { ComparativeCounter } from '@components/UI/atoms'

const TextArea: React.FC<ITextArea> = ({
  value = '',
  onChange,
  name,
  placeholder,
  error,
  rows = 4,
  disabled = false,
  hasCounter = false,
  maxCounterValue = 0,
  ...props
}) => {
  const [onFocus, setOnFocus] = useState(false)
  const [showPlaceholder, setShowPlaceholder] = useState(true)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if (value && hasCounter) {
      setInputValue(value)
    }
  }, [hasCounter, value])

  const countCharacters = (str: string) => {
    return str.replace(/\s+/g, '').length
  }

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      onChange(e)
      setInputValue(e.target.value)
    },
    [onChange]
  )

  const haveValueOrFocus = onFocus || value.length > 0

  const handleScroll: UIEventHandler<HTMLTextAreaElement> = useCallback(
    (event) => {
      const { scrollTop } = event.target as HTMLTextAreaElement
      if (!!scrollTop !== showPlaceholder) return
      setShowPlaceholder(scrollTop === 0)
    },
    [showPlaceholder]
  )

  return (
    <div className={styles[`${classMUI}-text-area`]}>
      <div className={styles[`${classMUI}-text-area--container`]}>
        {showPlaceholder && (
          <label
            htmlFor={name}
            style={{
              top: haveValueOrFocus ? '5px' : '10px',
              fontSize: haveValueOrFocus ? '12px' : '14px'
            }}
            className={styles[`${classMUI}-text-area--container__label`]}
          >
            {placeholder}
          </label>
        )}
        <textarea
          {...props}
          disabled={disabled}
          className={styles[`${classMUI}-text-area--container__text-area`]}
          name={name}
          value={value}
          onChange={handleChange}
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
          onScroll={handleScroll}
          id={name}
          rows={rows}
        />
      </div>
      <div className={styles[`${classMUI}-text-area__footer`]}>
        <span className={styles[`${classMUI}-text-area--container__error`]}>{error}</span>
        {hasCounter && <ComparativeCounter current={countCharacters(inputValue)} max={maxCounterValue} />}
      </div>
    </div>
  )
}

export default TextArea
