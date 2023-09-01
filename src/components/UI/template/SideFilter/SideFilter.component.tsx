import React, { FC, Fragment, useMemo } from 'react'
import { ArrowLeft2 } from '@constants/icons.constants'
import { defaultFilters } from '@constants'
import { FilterHeader } from '@components/UI/organism/FilterHeader'
import { MainButton } from '@components/UI/atoms'
import { CardByRenderType } from './factory'
import { IFilter, ISideFilter } from './SideFilter.interface'
import styles from './SideFilter.module.scss'

const SideFilter: FC<ISideFilter> = ({
  title,
  filters,
  totalAppliedFilters,
  filterSummary,
  buttonText,
  loading,
  isFiltersOpen,
  setIsFiltersOpen,
  setIsApplied,
  clearFilters,
  unApplyWithChild,
  getOptionsOnLoad,
  getOptionsOnSearch
}) => {
  const displayBtnClose = useMemo(() => {
    return (
      <MainButton
        iconProps={{ icon: ArrowLeft2, size: 20 }}
        className={`${styles['magneto-ui-side-filter_btn__close']} ${isFiltersOpen ? styles.btn_close : ''}`}
        onClick={() => setIsFiltersOpen((isOpen) => !isOpen)}
      />
    )
  }, [isFiltersOpen, setIsFiltersOpen])

  const displayBtnMain = useMemo(() => {
    if (!totalAppliedFilters) return <Fragment />
    return (
      <MainButton
        buttonText={'Ver empleos'}
        className={`${styles['magneto-ui-side-filter_btn__main']} ${isFiltersOpen ? styles['btn_main-open'] : ''}`}
        onClick={() => setIsFiltersOpen((isOpen) => !isOpen)}
      />
    )
  }, [totalAppliedFilters, isFiltersOpen, setIsFiltersOpen])

  const displayBackground = useMemo(() => {
    if (!isFiltersOpen) return <Fragment />
    return <span className={styles['magneto-iu-side-filter_background']} onClick={() => setIsFiltersOpen(false)} />
  }, [isFiltersOpen, setIsFiltersOpen])

  const cardProps = useMemo(() => {
    return {
      setIsApplied,
      unApplyWithChild,
      getOptionsOnLoad,
      getOptionsOnSearch,
      loading
    }
  }, [setIsApplied, unApplyWithChild, getOptionsOnLoad, getOptionsOnSearch, loading])

  const headerProps = useMemo(() => {
    return {
      title,
      buttonText,
      filterSummary,
      totalApplied: totalAppliedFilters,
      clearFilters
    }
  }, [title, buttonText, filterSummary, totalAppliedFilters, clearFilters])

  const displayFilters = useMemo(() => {
    const renderFilters = filters.length ? filters : defaultFilters
    return renderFilters?.map((item, i) => {
      return <CardByRenderType key={`${i}-${item.field}`} {...(item as unknown as IFilter)} {...cardProps} />
    })
  }, [filters, cardProps])

  return (
    <Fragment>
      {displayBtnClose}
      <aside className={`${styles['magneto-iu-side-filter']} ${isFiltersOpen ? styles.open : ''}`}>
        <div className={styles['magneto-iu-side-filter_content']}>
          <FilterHeader {...headerProps} />
          {displayFilters}
        </div>
      </aside>
      {displayBtnMain}
      {displayBackground}
    </Fragment>
  )
}

SideFilter.defaultProps = {
  filters: []
}

export default SideFilter
