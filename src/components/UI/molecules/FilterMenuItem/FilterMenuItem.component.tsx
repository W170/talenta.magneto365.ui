import React, { FC, Fragment, useCallback, useMemo } from 'react'
import { SmallClose } from '@constants/icons.constants'
import { IconItem } from '@components/UI/atoms'
import { IFilterMenuItem } from './FilterMenuItem.interface'
import styles from './FilterMenuItem.module.scss'

export const FilterMenuItem: FC<IFilterMenuItem> = ({
  id,
  label,
  total,
  field,
  multiple,
  loading,
  isApplied,
  hasTotal,
  isSearched,
  setIsApplied
}) => {
  const displayOutput = useMemo(() => {
    if (isApplied) return <IconItem icon={SmallClose} size={17} />
    if (!hasTotal) return <Fragment />
    return <output>{total}</output>
  }, [isApplied, total, hasTotal])

  const disabled = useMemo(() => {
    return isSearched || isApplied ? false : !total
  }, [isApplied, isSearched, total])

  const className = useMemo(() => {
    return isApplied ? styles.selected : isSearched ? '' : !total && styles.disabled
  }, [isApplied, isSearched, total])

  const handleClick = useCallback(() => {
    setIsApplied({ id, field, isApplied, multiple })
  }, [setIsApplied, id, field, isApplied, multiple])

  if (loading) return <div className={styles.skeleton} />

  return (
    <button className={`${styles['magneto-ui-filter-item']} ${className}`} onClick={handleClick} disabled={disabled}>
      <span>{label}</span>
      {displayOutput}
    </button>
  )
}

FilterMenuItem.defaultProps = {
  isSearched: false
}
