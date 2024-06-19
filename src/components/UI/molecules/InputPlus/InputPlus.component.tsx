import React, { useCallback, useEffect, useState } from 'react'
import { FlatLoader } from '../../atoms/FlatLoader'
import { Add } from '../../../../constants/icons.constants'
import { IInputPlus } from './InputPlus.interface'
import { classMUI } from '../../../../constants/stories/common.constants'
import styles from './InputPlus.module.scss'

export const InputPlus: React.FC<IInputPlus> = ({ onChange, placeholder, maxWords = 4, disabled, isLoading }) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [disabledBtn, setDisabledBtn] = useState<boolean>(false)

  useEffect(() => {
    if (disabled) {
      setDisabledBtn(true)
      return
    }
    setDisabledBtn(false)
  }, [disabled])

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

  const handleSubmmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      onChange(inputValue)
      setInputValue('')
    },
    [inputValue, onChange]
  )

  return (
    <form className={styles[`${classMUI}-input-plus`]} onSubmit={handleSubmmit}>
      <input placeholder={placeholder} value={inputValue} onChange={handleValue} type="text" />
      <button
        type="submit"
        className={`${styles[`${classMUI}-input-plus__plus-button`]} ${disabledBtn ? styles.disabled : ''}`}
        disabled={disabledBtn}
      >
        {isLoading ? <FlatLoader color="white" secondColor="transparent" /> : <img src={Add} alt="icon" />}
      </button>
    </form>
  )
}
