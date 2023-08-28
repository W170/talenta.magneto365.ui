import React, { FC, Fragment, useMemo } from 'react'
import { ArrowLeft2 } from '@constants/icons.constants'
import { FilterHeader } from '@components/UI/organism/FilterHeader'
import { FilterCard, IFilterCard } from '@components/UI/organism/FilterCard'
import { FilterCardOnSearch } from '@components/UI/organism/FilterCardOnSearch'
import { MainButton } from '@components/UI/atoms'
import { IFilter, ISideFilter } from './SideFilter.interface'
import styles from './SideFilter.module.scss'

//TODO: will define where put those enum, function and factory component
export enum ERenderType {
  selectionList = 'SELECTION_LIST',
  search = 'SEARCH',
  multiSelect = 'MULTI_SELECT',
  check = 'CHECK',
  geoPoint = 'GEO_POINT',
  customByCompany = 'CUSTOM:BY_COMPANY'
}

const getCardByRenderType = (renderType: ERenderType): FC<IFilterCard> | null => {
  switch (renderType) {
    case ERenderType.multiSelect:
    case ERenderType.selectionList:
      return FilterCard
    case ERenderType.search:
      return FilterCardOnSearch
    default:
      return null
  }
}

const CardByRenderType: FC<IFilterCard> = ({ renderType, ...props }) => {
  const CardByRenderType = getCardByRenderType(renderType)
  if (!CardByRenderType) return <Fragment />
  return <CardByRenderType renderType={renderType} {...props} />
}

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

  return (
    <Fragment>
      {displayBtnClose}
      <aside className={`${styles['magneto-iu-side-filter']} ${isFiltersOpen ? styles.open : ''}`}>
        <div className={styles['magneto-iu-side-filter_content']}>
          <FilterHeader {...headerProps} />
          {filters.map((item, i) => {
            return <CardByRenderType key={`${i}-${item.field}`} {...(item as unknown as IFilter)} {...cardProps} />
          })}
        </div>
      </aside>
      {displayBtnMain}
      {displayBackground}
    </Fragment>
  )
}

export default SideFilter
