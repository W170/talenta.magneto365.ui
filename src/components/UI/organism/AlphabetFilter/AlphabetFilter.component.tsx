import { FilterActions } from '@components/UI/molecules'
import { IAlphabetFilter } from './AlphabetFilter.interface'
import React from 'react'
import style from './AlphabetFilter.module.scss'

const AlphabetFilter: React.FC<IAlphabetFilter> = ({
  title,
  allActionText,
  onClickAction,
  filtersRef,
  className = ''
}) => {
  return (
    <div className={`${style['alphabet-filter']} ${className}`}>
      <p className={style['alphabet-filter__title']}> {title}</p>
      <FilterActions allAction={allActionText} onClickAction={onClickAction} {...{ filtersRef }} />
    </div>
  )
}

export default AlphabetFilter
