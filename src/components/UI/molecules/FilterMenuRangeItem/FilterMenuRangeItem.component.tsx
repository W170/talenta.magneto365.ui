import React, { useCallback, useState } from 'react'

import { FilterMenuRangeItemProps } from './FilterMenuRangeItem.interface'

import styles from './FilterMenuRangeItem.module.scss'

import { FilterEdit } from '@constants/icons.constants'
import { IconItem } from '@components/UI/atoms'
import { DEFAULT_RANGE_ERRORS, MAPPER_RANGE_TYPE } from './FilterMenuRangeItem.constant'

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
  const [error, setError] = useState<{ from: boolean; to: boolean }>(DEFAULT_RANGE_ERRORS)

  const dataType = (['date', 'number'].includes(props.dataType || '') ? props.dataType : 'number') as 'number' | 'date'

  const [values, setValues] = useState({
    from: MAPPER_RANGE_TYPE[dataType].transformDefaultValue(from),
    to: MAPPER_RANGE_TYPE[dataType].transformDefaultValue(to)
  })

  const onApply = useCallback(() => {
    if (!values.from || !values.to) {
      setError({ from: !values.from, to: !values.to })
      return
    }
    const validator = MAPPER_RANGE_TYPE[dataType]?.validator
    const resultValidation = validator?.(values.from, values.to)
    if (resultValidation) {
      setError(resultValidation)
      return
    }
    setError(DEFAULT_RANGE_ERRORS)
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
          if (error) setError(DEFAULT_RANGE_ERRORS)
        }}
      />
      {separatorText && <span className={styles['range-filter__separator']}>{separatorText}</span>}
      <input
        className={`${styles['range-filter__input']}  ${error?.to ? styles['range-filter__input--error'] : ''}`}
        type={dataType}
        value={values.to}
        onChange={(e) => {
          onChange('to', e.target.value)
          if (error) setError(DEFAULT_RANGE_ERRORS)
        }}
      />
      <button className={styles['range-filter__button']} onClick={onApply} aria-label="Aplicar filtro">
        <IconItem icon={FilterEdit} size={17} />
      </button>
    </div>
  )
}
