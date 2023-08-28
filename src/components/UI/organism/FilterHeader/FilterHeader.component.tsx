import React, { FC, Fragment, useMemo } from 'react'
import { Broom } from '@constants/icons.constants'
import { MainButton } from '@components/UI/atoms'
import { Switch } from '@components/UI/atoms/Switch'
import { IFilterHeader } from './FilterHeader.interface'
import styles from './FilterHeader.modules.scss'

export const FilterHeader: FC<IFilterHeader> = ({
  title,
  buttonText,
  filterSummary,
  totalApplied,
  clearFilters,
  switchText
}) => {
  const mainBtnProps = useMemo(() => {
    return {
      buttonText,
      iconProps: { icon: Broom, size: 18 },
      className: styles['magneto-ui-filter-header_btn'],
      onClick: () => clearFilters()
    }
  }, [buttonText, clearFilters])

  const displayBtnClear = useMemo(() => {
    if (!totalApplied) return <Fragment />
    return (
      <div className={styles['magneto-ui-filter-header_clean']}>
        <MainButton {...mainBtnProps} />
        {totalApplied && <span>{`(${totalApplied})`}</span>}
      </div>
    )
  }, [totalApplied, mainBtnProps])

  const displayFilterSummary = useMemo(() => {
    return <span className={styles['magneto-ui-filter-header_summary']}>{filterSummary}</span>
  }, [filterSummary])

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
      {displayFilterSummary}
    </article>
  )
}
