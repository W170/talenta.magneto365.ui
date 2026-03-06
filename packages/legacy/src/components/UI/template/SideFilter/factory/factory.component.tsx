import React, { FC, Fragment } from 'react'
import { ERenderType } from '@constants/stories'
import { FilterCard, IFilterCard } from '@components/UI/organism/FilterCard'
import { FilterCardOnSearch } from '@components/UI/organism/FilterCardOnSearch'

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

export const CardByRenderType: FC<IFilterCard> = ({ renderType, ...props }) => {
  const CardByRenderType = getCardByRenderType(renderType)
  if (!CardByRenderType) return <Fragment />
  return <CardByRenderType renderType={renderType} {...props} />
}
