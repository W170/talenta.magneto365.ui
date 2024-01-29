import React, { useState } from 'react'
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
  const haveValueOrFocus = onFocus || value.length > 0

  return (
    <div className={styles[`${classMUI}-text-area`]}>
      <div className={styles[`${classMUI}-text-area--container`]}>
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
        <textarea
          disabled={disabled}
          className={styles[`${classMUI}-text-area--container__text-area`]}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
          id={name}
          rows={rows}
        />
      </div>
      {error && <span className={styles[`${classMUI}-text-area--container__error`]}>{error}</span>}
    </div>
  )
}

export default TextArea
