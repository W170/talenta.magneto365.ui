import React, { useCallback, useEffect, useState } from 'react'
import { FlatLoader } from '../../atoms/FlatLoader'
import { Add2 } from '../../../../constants/icons.constants'
import { IInputPlus } from './InputPlus.interface'
import { classMUI } from '../../../../constants/stories/common.constants'
import styles from './InputPlus.module.scss'

export const InputPlus: React.FC<IInputPlus> = ({
  onChange,
  placeholder,
  maxWords = 4,
  disabled,
  isLoading,
  className = '',
  getValue
}) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [disabledBtn, setDisabledBtn] = useState<boolean>(false)

  useEffect(() => {
    if (disabled) {
      setDisabledBtn(true)
      return
    }
    setDisabledBtn(false)
  }, [disabled])

  useEffect(() => {
    if (getValue && inputValue) {
      getValue(inputValue)
    }
  }, [getValue, inputValue])

  const handleValue = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      setInputValue(value)
      if (disabled) return
      const worksCount = value.trim().split(/\s+/)
      if (worksCount.length > maxWords) {
        setDisabledBtn(true)
        return
      }
      setDisabledBtn(false)
    },
    [disabled, maxWords]
  )

  const handleSubmmit = useCallback(() => {
    if (inputValue) {
      onChange(inputValue)
      setInputValue('')
    }
  }, [inputValue, onChange])

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        event.preventDefault()
        if (!disabledBtn) {
          handleSubmmit()
        }
      }
    },
    [disabledBtn, handleSubmmit]
  )

  return (
    <div className={`${styles[`${classMUI}-input-plus`]} ${className}`}>
      <input
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleValue}
        type="text"
      />
      <button
        type="button"
        onClick={handleSubmmit}
        className={`${styles[`${classMUI}-input-plus__plus-button`]} ${disabledBtn ? styles.disabled : ''}`}
        disabled={disabledBtn}
      >
        {isLoading ? (
          <FlatLoader color="white" secondColor="transparent" />
        ) : (
          <img className={`${disabledBtn ? styles['disabled-img'] : ''}`} src={Add2} alt="icon" />
        )}
      </button>
    </div>
  )
}
