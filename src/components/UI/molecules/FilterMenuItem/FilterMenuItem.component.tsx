import React, { FC, Fragment, useCallback, useMemo } from 'react'
import { IconItem } from '@components/UI/atoms'
import { close } from '@constants/icons.constants'
import { IFilterMenuItem } from './FilterMenuItem.interface'
import styles from './FilterMenuItem.module.scss'

export const FilterMenuItem: FC<IFilterMenuItem> = ({
  id,
  label,
  total,
  isApplied,
  setIsApplied,
  field,
  loading,
  hasTotal
}) => {
  const displayOutput = useMemo(() => {
    if (isApplied) return <IconItem icon={close} size={17} />
    if (!hasTotal) return <Fragment />
    return <output>{total}</output>
  }, [isApplied, total, hasTotal])

  const handleClick = useCallback(() => {
    setIsApplied({ id, field, isApplied })
  }, [setIsApplied, id, field, isApplied])

  if (loading) return <div className={styles.skeleton} />

  return (
    <button
      className={`${styles['magneto-ui-filter-item']} ${isApplied && styles.selected}  ${!total && styles.disabled}`}
      onClick={handleClick}
      disabled={!total}
    >
      <span>{label}</span>
      {displayOutput}
    </button>
  )
}
