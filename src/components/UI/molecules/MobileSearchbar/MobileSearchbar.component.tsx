import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { MainButton } from '../../atoms'
import { IMobileSearchbar } from './MobileSearchbar.interface'
import styles from './MobileSearchbar.modules.scss'
import { useClickOutside } from '@components/hooks/useClickOutside'
import { ISearchOptions } from '../MegaMenuSearchBar/MegaMenuSearchBar.interface'

import { closeSearchMobileProps, searchMobileProps } from '@constants/stories'

const Component: React.FC<IMobileSearchbar> = ({
  termValue,
  onSearch,
  onClick,
  focusSearchInput,
  showMobileSearchbar,
  placeholder,
  options = [],
  onSelectOption,
  onSubmit
}) => {
  const [searchValue, setSearchValue] = useState(termValue ? String(termValue) : '')
  const [showOptions, setShowOptions] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const safeOptions = useMemo<ISearchOptions[]>(() => (Array.isArray(options) ? options : []), [options])

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    onSearch(searchValue)
    onSubmit?.(searchValue)
    localStorage.setItem('searchValue', searchValue)
    setShowOptions(false)
    searchInputRef.current?.blur()
  }

  const handleClearSearch = () => {
    setSearchValue('')
    onSearch('')
    localStorage.removeItem('searchValue')
    setShowOptions(false)
    if (onClick) onClick()
  }

  const onSearchValues = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value
      setSearchValue(value)
      onSearch(value)
      if (String(value ?? '').trim().length >= 2) {
        setShowOptions(true)
      }
    },
    [onSearch]
  )

  const onSelectSearchOption = useCallback(
    (option: ISearchOptions) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      event.stopPropagation()
      setShowOptions(false)
      setSearchValue(option.title)
      onSearch(option.title)
      localStorage.setItem('searchValue', option.title)
      onSelectOption?.(option)
      searchInputRef.current?.blur()
      if (onClick) onClick()
    },
    [onClick, onSearch, onSelectOption]
  )

  const closeOptions = useCallback(() => {
    setShowOptions(false)
  }, [])

  useClickOutside(contentRef, closeOptions)

  useEffect(() => {
    if (focusSearchInput) {
      searchInputRef.current?.focus()
      if (safeOptions.length > 0) {
        setShowOptions(true)
      }
    }
  }, [focusSearchInput, safeOptions.length])

  useEffect(() => {
    setSearchValue(termValue ? String(termValue) : '')
  }, [termValue])

  useEffect(() => {
    if (!showMobileSearchbar) {
      setShowOptions(false)
    }
  }, [showMobileSearchbar])

  useEffect(() => {
    if (String(searchValue ?? '').trim().length > 0 && safeOptions.length > 0) {
      setShowOptions(true)
    }
  }, [safeOptions.length, searchValue])

  return (
    <div className={styles.MobileSearchbarComponent} data-show-mobile-searchbar={showMobileSearchbar} ref={contentRef}>
      <form onSubmit={handleSubmit}>
        {searchValue && <div className={styles['search-badge']} />}
        <MainButton className={styles['magneto-ui-search-button']} {...searchMobileProps} />
        <label htmlFor="search" />
        <input
          type="text"
          name="search"
          value={searchValue}
          placeholder={placeholder}
          onChange={onSearchValues}
          onFocus={() => safeOptions.length > 0 && setShowOptions(true)}
          ref={searchInputRef}
        />

        <MainButton
          className={styles['magneto-ui-remove-button']}
          onClick={handleClearSearch}
          {...closeSearchMobileProps}
        />
      </form>
      {showOptions && safeOptions.length > 0 && (
        <div className={styles['mobile-searchbar-options']}>
          {safeOptions.map((option, index) => (
            <a
              className={styles['mobile-searchbar-option']}
              href={option.url}
              key={`mobile-search-option-${option.title}-${index}`}
              onClick={onSelectSearchOption(option)}
            >
              <p className={styles['mobile-searchbar-option__title']}>{option.title}</p>
              {option.subtitle && <p className={styles['mobile-searchbar-option__subtitle']}>{option.subtitle}</p>}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

/**
 * Molecule UI component for MobileSearchbar
 */

export const MobileSearchbar = Component
