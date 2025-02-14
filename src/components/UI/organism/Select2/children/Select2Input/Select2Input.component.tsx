import React, { useMemo } from 'react'
import { ArrowLeft2 } from '@constants/icons.constants'
import { Input } from '@components/UI/molecules'
import { ISelect2InputProps } from './Select2Input.interface'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './Select2Input.module.scss'

const Component = <T,>({
  clickOut,
  placeholder,
  searchValue,
  disabled,
  handleSearch,
  setClickOut,
  disableList,
  icon,
  valueSelected,
  isMultiple,
  name,
  setTerm
}: ISelect2InputProps<T>): JSX.Element => {
  const arrowRotate = useMemo(
    () =>
      CNM.get({
        styles,
        cls: [
          'select2-input__suffix-icon',
          clickOut ? 'select2-input__suffix-icon--rotate-arrow' : 'select2-input__suffix-icon--static-arrow'
        ]
      }),
    [clickOut]
  )

  const label = useMemo(() => {
    if (isMultiple) {
      return <span>{placeholder}</span>
    }
    if (valueSelected[0]?.name) {
      return (
        <span className={styles['select-label']}>
          <span>{placeholder}</span>
          <span>{valueSelected[0]?.name}</span>
        </span>
      )
    }
    return <span>{placeholder}</span>
  }, [isMultiple, placeholder, valueSelected])

  return (
    <div className={CNM.get({ styles, cls: ['select2-input'] })}>
      <div style={{ display: clickOut ? 'block' : 'none' }}>
        <Input
          type="text"
          value={searchValue}
          placeholder={placeholder}
          name={name || placeholder}
          hideIcon
          onChange={handleSearch}
          disabled={disabled}
          autoFocus={clickOut}
        />
      </div>
      <button
        style={{ display: clickOut ? 'none' : 'flex' }}
        type="button"
        onClick={() => setClickOut(!clickOut)}
        disabled={disableList || disabled}
        className={CNM.get({
          styles,
          cls: ['select2-input__button', (disableList || disabled) && 'select2-input__button--disabled']
        })}
      >
        <span>
          {icon && <img src={icon} alt="select-icon" />}

          <p
            className={CNM.get({
              styles,
              cls: [
                'select2-input__button-text',
                valueSelected.length
                  ? 'select2-input__button-text--selected'
                  : 'select2-input__button-text--placeholder'
              ]
            })}
          >
            {valueSelected[0]?.img && <img src={valueSelected[0]?.img} alt="selected-img" />}
            {label}
          </p>
        </span>
        {!setTerm && <img src={ArrowLeft2} alt="arrow-icon" className={arrowRotate} />}
      </button>
    </div>
  )
}

/**
 * Molecule UI child component of select 2
 */
export const Select2Input = Component
