import React, { UIEventHandler, useCallback, useState } from 'react'
import { ITextArea } from './TextArea.interface'
import { classMUI } from '@constants/stories'
import styles from './TextArea.module.scss'

const TextArea: React.FC<ITextArea> = ({
  value = '',
  onChange,
  name,
  placeholder,
  error,
  rows = 4,
  disabled = false
}) => {
  const [onFocus, setOnFocus] = useState(false)
  const [showPlaceholder, setShowPlaceholder] = useState(true)

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
          disabled={disabled}
          className={styles[`${classMUI}-text-area--container__text-area`]}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
          onScroll={handleScroll}
          id={name}
          rows={rows}
        />
      </div>
      {error && <span className={styles[`${classMUI}-text-area--container__error`]}>{error}</span>}
    </div>
  )
}

export default TextArea
