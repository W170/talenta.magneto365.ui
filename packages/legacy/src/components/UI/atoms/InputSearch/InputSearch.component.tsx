import React, { useMemo } from 'react'
import { IconItem } from '@components/UI/atoms'
import { Close, SearchIcon } from '@constants/icons.constants'
import { ISearchInput } from './InputSearch.interface'
import { classMUI } from '@constants/stories'
import style from './InputSearch.module.scss'

const InputSearch: React.FC<ISearchInput> = ({
  inputValue = '',
  onChange,
  closeOnClick,
  placeholder,
  searchOnClick
}) => {
  const hasASearchFunction = useMemo(() => {
    if (searchOnClick) {
      return (
        <button className={style[`${classMUI}-container__input-search--btn`]} onClick={searchOnClick}>
          <IconItem
            className={style[`${classMUI}-container__input-search--icon`]}
            icon={SearchIcon}
            alt="search-icon"
          />
        </button>
      )
    }
    return (
      <IconItem className={style[`${classMUI}-container__input-search--icon`]} icon={SearchIcon} alt="search-icon" />
    )
  }, [searchOnClick])

  return (
    <div className={style[`${classMUI}-container`]}>
      <input
        className={style[`${classMUI}-container__input-search`]}
        placeholder={placeholder}
        style={{ flex: 1 }}
        value={inputValue}
        onChange={onChange}
        type="text"
      />
      {inputValue.length !== 0 ? (
        <button className={style[`${classMUI}-container__input-search--btn`]} onClick={closeOnClick}>
          <IconItem icon={Close} alt="search-icon" />
        </button>
      ) : (
        hasASearchFunction
      )}
    </div>
  )
}

export default InputSearch
