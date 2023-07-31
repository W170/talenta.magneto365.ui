import React, { FC, useCallback, useMemo } from 'react'
import { IconItem } from '@components/UI/atoms'
import close from '@assets/Close.svg'
import { IFilterMenuItem } from './FilterMenuItem.interface'
import styles from './FilterMenuItem.module.scss'

export const FilterMenuItem: FC<IFilterMenuItem> = ({ label, amount, isSelected, setIsSelected }) => {
  const displayOutput = useMemo(() => {
    if (isSelected) return <IconItem icon={close} size={17} />
    return <output>{amount}</output>
  }, [isSelected, amount])

  const handleClick = useCallback(() => {
    setIsSelected(!isSelected)
  }, [setIsSelected, isSelected])

  return (
    <p className={`${styles['magneto-ui-filter-item']} ${isSelected && styles.selected}`} onClick={handleClick}>
      <span>{label}</span>
      {displayOutput}
    </p>
  )
}
