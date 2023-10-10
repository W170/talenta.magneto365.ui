import React, { FC, Fragment, useCallback, useMemo } from 'react'
import { SmallClose } from '@constants/icons.constants'
import { formatNumber } from '@shared/utils/common'
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
  customClass,
  customId,
  hiddenCount,
  setIsApplied
}) => {
  const displayOutput = useMemo(() => {
    if (isApplied) return <IconItem icon={SmallClose} size={17} />
    if (!hasTotal || hiddenCount) return <Fragment />
    return <output>{formatNumber(total)}</output>
  }, [total, isApplied, hasTotal, hiddenCount])

  const disabled = useMemo(() => {
    return isSearched || isApplied || hiddenCount ? false : !total
  }, [total, isApplied, isSearched, hiddenCount])

  const className = useMemo(() => {
    return isApplied ? styles.selected : isSearched ? styles.isSearched : hiddenCount ? '' : !total && styles.disabled
  }, [total, isApplied, isSearched, hiddenCount])

  const handleClick = useCallback(() => {
    setIsApplied({ id, field, isApplied, multiple })
  }, [setIsApplied, id, field, isApplied, multiple])

  if (loading) return <div className={styles.skeleton} />

  return (
    <button
      id={customId}
      className={`${styles['magneto-ui-filter-item']} ${className} ${customClass ? customClass : ''}`}
      title={label}
      onClick={handleClick}
      disabled={disabled}
    >
      <span>{label}</span>
      {displayOutput}
    </button>
  )
}

FilterMenuItem.defaultProps = {
  isSearched: false,
  hiddenCount: false
}
