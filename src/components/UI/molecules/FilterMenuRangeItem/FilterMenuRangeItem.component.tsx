import React, { useCallback, useState } from 'react'

import { FilterMenuRangeItemProps } from './FilterMenuRangeItem.interface'

import styles from './FilterMenuRangeItem.module.scss'

import { FilterEdit } from '@constants/icons.constants'
import { IconItem } from '@components/UI/atoms'

// Mapa de validadores y transformadores por tipo
const typeMap = {
  number: {
    validator: (from: string, to: string) => {
      const fromNum = Number(from)
      const toNum = Number(to)
      const result = {
        from: isNaN(fromNum),
        to: isNaN(toNum) || toNum <= fromNum
      }
      if (!result.from && !result.to) return null
      return result
    },
    transformDefaultValue: (val: string | number | null | undefined) =>
      val !== undefined && val !== null ? `${val}` : '0'
  },
  date: {
    validator: (from: string, to: string) => {
      const fromDate = new Date(from)
      const toDate = new Date(to)
      !isNaN(fromDate.getTime()) && !isNaN(toDate.getTime()) && toDate.getTime() >= fromDate.getTime()
      const result = {
        from: isNaN(fromDate.getTime()),
        to: isNaN(toDate.getTime()) || toDate.getTime() < fromDate.getTime()
      }
      if (!result.from && !result.to) return null
      return result
    },
    transformDefaultValue: (val: string | number | null | undefined) =>
      val !== undefined && val !== null ? `${val}` : ''
  }
} as const

const defaultErrors = { from: false, to: false }
export const FilterMenuRangeItem: React.FC<FilterMenuRangeItemProps> = ({
  to,
  from,
  loading,
  id,
  separatorText,
  field,
  isApplied,
  multiple,
  setIsApplied,
  ...props
}) => {
  const [error, setError] = useState<{ from: boolean; to: boolean }>(defaultErrors)

  const dataType = (['date', 'number'].includes(props.dataType || '') ? props.dataType : 'number') as 'number' | 'date'

  const [values, setValues] = useState({
    from: typeMap[dataType].transformDefaultValue(from),
    to: typeMap[dataType].transformDefaultValue(to)
  })

  const onApply = useCallback(() => {
    if (!values.from || !values.to) {
      setError({ from: !values.from, to: !values.to })
      return
    }
    const validator = typeMap[dataType]?.validator
    const resultValidation = validator?.(values.from, values.to)
    if (resultValidation) {
      setError(resultValidation)
      return
    }
    setError(defaultErrors)
    const customId = { id: id as string, from: values.from as string, to: values.to as string }
    setIsApplied({ id: customId, field, isApplied, multiple })
  }, [id, values, setIsApplied, field, isApplied, multiple, dataType])

  const onChange = useCallback(
    (key: 'from' | 'to', value: string) => {
      setValues({ ...values, [key]: value })
    },
    [values]
  )

  if (loading) return <div className={styles.skeleton} />

  return (
    <div className={styles['range-filter']}>
      <input
        className={`${styles['range-filter__input']} ${error?.from ? styles['range-filter__input--error'] : ''}`}
        type={dataType}
        value={values.from}
        onChange={(e) => {
          onChange('from', e.target.value)
          if (error) setError(defaultErrors)
        }}
      />
      {separatorText && <span className={styles['range-filter__separator']}>{separatorText}</span>}
      <input
        className={`${styles['range-filter__input']}  ${error?.to ? styles['range-filter__input--error'] : ''}`}
        type={dataType}
        value={values.to}
        onChange={(e) => {
          onChange('to', e.target.value)
          if (error) setError(defaultErrors)
        }}
      />
      <button className={styles['range-filter__button']} onClick={onApply} aria-label="Aplicar filtro">
        <IconItem icon={FilterEdit} size={17} />
      </button>
    </div>
  )
}
