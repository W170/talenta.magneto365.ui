import React, { FC, Fragment } from 'react'
import { IFilter, ISideFilter } from './SideFilter.interface'
import { FilterHeader } from '@components/UI/organism/FilterHeader'
import { FilterCard, IFilterCard } from '@components/UI/organism/FilterCard'
import { FilterCardOnSearch } from '@components/UI/organism/FilterCardOnSearch'
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
  filters,
  setIsApplied,
  totalAppliedFilters,
  clearFilters,
  title,
  buttonText,
  loading
}) => {
  return (
    <aside className={styles['magneto-iu-side-filter']}>
      <FilterHeader
        filtersApplied={totalAppliedFilters}
        clearFilters={clearFilters}
        buttonText={buttonText}
        title={title}
      />
      {filters.map((item, i) => {
        return (
          <CardByRenderType
            key={`${i}-${item.field}`}
            setIsApplied={setIsApplied}
            loading={loading}
            {...(item as unknown as IFilter)}
          />
        )
      })}
    </aside>
  )
}

export default SideFilter
