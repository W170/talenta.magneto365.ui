import React, { FC, useMemo } from 'react'
import { Broom, FilterIcon } from '@constants/icons.constants'
import { IconItem, MainButton } from '@components/UI/atoms'
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
      title: buttonText,
      iconProps: { icon: Broom, size: 18 },
      className: styles['magneto-ui-filter-header_btn'],
      disabled: !totalApplied,
      onClick: () => clearFilters()
    }
  }, [buttonText, totalApplied, clearFilters])

  const displayBtnClear = useMemo(() => {
    return (
      <div className={styles['magneto-ui-filter-header_clean']}>
        <MainButton {...mainBtnProps} />
        {typeof totalApplied === 'number' && (
          <span className={!totalApplied ? styles.disabled : ''}>{`(${totalApplied})`}</span>
        )}
      </div>
    )
  }, [totalApplied, mainBtnProps])

  const displayFilterSummary = useMemo(() => {
    return <span className={styles['magneto-ui-filter-header_summary']}>{filterSummary}</span>
  }, [filterSummary])

  return (
    <article className={styles['magneto-ui-filter-header']}>
      <div className={styles['magneto-ui-filter-header_title']}>
        <p>
          <IconItem icon={FilterIcon} size={16} />
          {title}
        </p>
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
