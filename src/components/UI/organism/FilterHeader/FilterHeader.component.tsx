import React, { FC, Fragment, useMemo } from 'react'
import { IFilterHeader } from './FilterHeader.interface'
import styles from './FilterHeader.modules.scss'
import { MainButton } from '@components/UI/atoms'
import { Broom } from '@constants/icons.constants'
import { Switch } from '@components/UI/atoms/Switch'

export const FilterHeader: FC<IFilterHeader> = ({ title, buttonText, switchText, filtersApplied, clearFilters }) => {
  const mainBtnProps = useMemo(() => {
    return {
      buttonText,
      iconProps: { icon: Broom, size: 18 },
      className: styles['magneto-ui-filter-header_btn'],
      onClick: () => clearFilters()
    }
  }, [buttonText, clearFilters])

  const displayBtnClear = useMemo(() => {
    if (!filtersApplied) return <Fragment />
    return (
      <div className={styles['magneto-ui-filter-header_clean']}>
        <MainButton {...mainBtnProps} />
        {filtersApplied && <span>{`(${filtersApplied})`}</span>}
      </div>
    )
  }, [filtersApplied, mainBtnProps])

  return (
    <article className={styles['magneto-ui-filter-header']}>
      <div className={styles['magneto-ui-filter-header_title']}>
        <p role="heading">{title}</p>
        {displayBtnClear}
      </div>
      {switchText && (
        <Switch
          //TODO: review isActive, setIsActive
          title={switchText}
          className={styles['magneto-ui-filter-header_switch']}
          setIsActive={(value) => console.log('Change isActive', value)}
          isActive
        />
      )}
    </article>
  )
}
