import React, { useMemo, useState } from 'react'
import { IInput } from './Input.interface'
import { classMUI } from '@constants/stories'
import styles from './Input.module.scss'
import { DocumentTextGray, Email, Mobile } from '@constants/icons.constants'

const Input: React.FC<IInput> = ({ value = '', onChange, name, type, placeholder, customIcon, hideIcon = false }) => {
  const [onFocus, setOnFocus] = useState(false)
  const haveValueOrFocus = onFocus || value.length > 0

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

  return (
    <div className={styles[`${classMUI}-input-container`]}>
      <input
        style={{
          padding: hideIcon ? '0px 10px' : '0px 40px',
          width: hideIcon ? 'calc(100% - 22px)' : 'calc(100% - 82px)'
        }}
        className={styles[`${classMUI}-input-container__input`]}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        id="inputField"
      />
      <label
        htmlFor="inputField"
        style={{
          left: hideIcon ? '10px' : '40px',
          top: haveValueOrFocus ? '20%' : '50%',
          fontSize: haveValueOrFocus ? '12px' : '14px'
        }}
        className={styles[`${classMUI}-input-container__label`]}
      >
        {placeholder}
      </label>
      {hideIcon ? null : (
        <img className={styles[`${classMUI}-input-container__icon`]} src={customIcon ? customIcon : dinamycIcon} />
      )}
    </div>
  )
}

export default Input
