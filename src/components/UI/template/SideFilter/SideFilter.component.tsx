import React, { FC, Fragment, useEffect, useMemo, useState } from 'react'
import { ArrowLeft2 } from '@constants/icons.constants'
import { defaultFilters } from '@constants/stories'
import { FilterHeader } from '@components/UI/organism/FilterHeader'
import { MainButton } from '@components/UI/atoms'
import { CardByRenderType } from './factory'
import { IFilter, ISideFilter } from './SideFilter.interface'
import styles from './SideFilter.module.scss'

const SideFilter: FC<ISideFilter> = ({
  title,
  filters = [],
  totalAppliedFilters,
  filterSummary,
  buttonText,
  loading,
  isFiltersOpen,
  textBtnMain,
  titleBtnClose,
  setIsFiltersOpen,
  setIsApplied,
  clearFilters,
  unApplyWithChild,
  getOptionsOnLoad,
  getOptionsOnSearch
}) => {
  const [currentOpenFilter, setCurrentOpenFilter] = useState<number>(99)
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
      return (
        <CardByRenderType
          key={`${i}-${item.field}`}
          {...(item as unknown as IFilter)}
          index={i}
          showFilters={currentOpenFilter === i}
          setCurrentOpenFilter={setCurrentOpenFilter}
          {...cardProps}
        />
      )
    })
  }, [filters, cardProps, currentOpenFilter])

  const displayBtnMain = useMemo(() => {
    if (!totalAppliedFilters) return <Fragment />
    return (
      <MainButton
        buttonText={textBtnMain}
        className={`${styles['magneto-ui-side-filter_btn__main']} ${isFiltersOpen ? styles['btn_main-open'] : ''}`}
        title={textBtnMain}
        onClick={() => setIsFiltersOpen((isOpen) => !isOpen)}
      />
    )
  }, [totalAppliedFilters, isFiltersOpen, textBtnMain, setIsFiltersOpen])

  const displayBackground = useMemo(() => {
    if (!isFiltersOpen) return <Fragment />
    return <span className={styles['magneto-iu-side-filter_background']} onClick={() => setIsFiltersOpen(false)} />
  }, [isFiltersOpen, setIsFiltersOpen])

  useEffect(() => {
    const { body } = document
    if (!body) return
    body.style.overflowY = isFiltersOpen ? 'hidden' : 'auto'
  }, [isFiltersOpen])

  return (
    <Fragment>
      <aside className={`${styles['magneto-iu-side-filter']} ${isFiltersOpen ? styles.open : ''}`}>
        <div className={styles['magneto-iu-side-filter_content']}>
          <FilterHeader {...headerProps} />
          {displayFilters}
        </div>
      </aside>
      {isFiltersOpen && (
        <div style={{ position: 'absolute', height: '100vh', right: '5px', zIndex: '9999' }}>
          <MainButton
            iconProps={{ icon: ArrowLeft2, size: 20 }}
            className={`${styles['magneto-ui-side-filter_btn__close']} ${isFiltersOpen ? styles.btn_close : ''}`}
            title={titleBtnClose}
            onClick={() => setIsFiltersOpen((isOpen) => !isOpen)}
          />
        </div>
      )}
      {displayBtnMain}
      {displayBackground}
    </Fragment>
  )
}

export default SideFilter
