import React, { useCallback, useMemo, useState } from 'react'
import { IToogleSearch } from './ToggleSearch.interface'
import style from './ToggleSearch.modules.scss'
import { classMUI } from '@constants/stories'
import { MainButton } from '@components/UI/atoms'

const Component: React.FC<IToogleSearch> = ({
  placeholder,
  onSearch,
  searchButtonProps,
  removeButtonProps,
  notOpenPropsButton,
  termValue
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchValue, setSearchValue] = useState(termValue ? termValue : '')

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault()
      onSearch(searchValue)
      localStorage.setItem('toggleSearch', searchValue)
    },
    [onSearch, searchValue]
  )

  const handleClearSearch = useCallback(() => {
    setSearchValue('')
    onSearch('')
    localStorage.removeItem('toggleSearch')
  }, [onSearch])

  const onClose = useCallback(() => {
    if (searchValue) return
    setTimeout(() => setIsOpen(false), 2000)
  }, [searchValue])

  const SearchBar = useMemo(
    () => (
      <div className={style[`${classMUI}-search-bar`]}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onMouseLeave={onClose}
            placeholder={placeholder}
          />
          <div className={style['magneto-ui-searchbar-buttons']}>
            {searchValue && (
              <>
                <MainButton
                  className={style['magneto-ui-remove-button']}
                  onClick={handleClearSearch}
                  {...removeButtonProps}
                />
                <span>|</span>
              </>
            )}
            <MainButton {...searchButtonProps} />
          </div>
        </form>
      </div>
    ),
    [handleClearSearch, handleSubmit, onClose, placeholder, removeButtonProps, searchButtonProps, searchValue]
  )

  return (
    <div className={style[`${classMUI}-toogle-search`]}>
      {isOpen ? (
        SearchBar
      ) : (
        <MainButton
          className={style[`${classMUI}-toogle-search__not-open`]}
          onClick={() => setIsOpen(true)}
          {...notOpenPropsButton}
        />
      )}
    </div>
  )
}

/**
 * UI Molecule of a toogle search
 */
export const ToggleSearch = Component
