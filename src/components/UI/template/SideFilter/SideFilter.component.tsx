import React, { FC, Fragment, useMemo } from 'react'
import { FilterHeader } from '@components/UI/organism/FilterHeader'
import { FilterCard, IFilterCard } from '@components/UI/organism/FilterCard'
import { FilterCardOnSearch } from '@components/UI/organism/FilterCardOnSearch'
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
  buttonText,
  loading,
  setIsApplied,
  clearFilters,
  unApplyWithChild,
  getOptionsOnLoad,
  getOptionsOnSearch
}) => {
  //
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
      totalApplied: totalAppliedFilters,
      clearFilters
    }
  }, [title, buttonText, totalAppliedFilters, clearFilters])

  return (
    <aside className={styles['magneto-iu-side-filter']}>
      <FilterHeader {...headerProps} />
      {filters.map((item, i) => {
        return <CardByRenderType key={`${i}-${item.field}`} {...(item as unknown as IFilter)} {...cardProps} />
      })}
    </aside>
  )
}

export default SideFilter
