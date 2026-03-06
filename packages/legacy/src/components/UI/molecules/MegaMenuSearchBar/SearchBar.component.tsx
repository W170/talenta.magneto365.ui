import React, { useCallback, useMemo, useRef, useState } from 'react'
import { ISearchBar, ISearchOptions } from './MegaMenuSearchBar.interface'
import styles from './MegaMenuSearchBar.module.scss'
import { IconItem } from '@components/UI/atoms'
import { Input } from '../Input'
import { useClickOutside } from '@components/hooks/useClickOutside'
import { CurrentLocation } from '@constants/icons.constants'
import { MegaMenuEmpty } from '@components/UI/molecules'

const AVAILABLE_KEYS = ['Enter', 'ArrowDown', 'ArrowUp']

const SearchBar: React.FC<ISearchBar> = ({
  icon,
  onSearch,
  className,
  placeholder,
  termValue,
  actionIcon,
  options,
  sectionTitle,
  onSelectOption,
  noContent,
  recentSearch,
  disableOptions = false,
  onSubmit
}) => {
  const [selectedOption, setSelectedOption] = useState(0)
  const [showOptions, setShowOptions] = useState(false)
  const linkRef = useRef<HTMLAnchorElement>(null)
  const optionsRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const renderSectionTitle = useMemo(() => {
    if (!sectionTitle || termValue) return
    const { title, url, onClick } = sectionTitle!
    return (
      <div className={styles['mega-menu-search-bar__input-title']} key={'main title'} onClick={onClick}>
        <a href={url}>
          <IconItem icon={CurrentLocation} size={16} />
          <p className={styles['mega-menu-search-bar__input-option__title']}>{title}</p>
        </a>
      </div>
    )
  }, [sectionTitle, termValue])

  const onSearchValues = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const term = event.target.value
      onSearch(term)
    },
    [onSearch]
  )

  const closeOptions = useCallback(() => {
    setShowOptions(false)
  }, [])

  const onPressKey = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      const { key } = event
      if (key === 'Enter' && onSubmit) {
        event.preventDefault()
        onSubmit(String(termValue ?? ''))
        closeOptions()
        return
      }

      if (!AVAILABLE_KEYS.includes(key) || !optionsRef.current || disableOptions) return
      setSelectedOption((current) => {
        if (key == 'ArrowDown' && current < options.length - 1) {
          optionsRef.current!.scrollTop += 38
          return current + 1
        }
        if (key == 'ArrowUp' && current > 0) {
          optionsRef.current!.scrollTop -= 38
          return current - 1
        }
        return current
      })

      if (key == 'Enter' && linkRef.current) return linkRef.current.click()
    },
    [closeOptions, disableOptions, onSubmit, options.length, termValue]
  )

  const handleShowOptions = useCallback(
    (show: boolean) => () => {
      if (disableOptions) return
      setShowOptions(show)
    },
    [disableOptions]
  )

  const onPressOption = useCallback(
    (option: ISearchOptions) => (event: React.MouseEvent<HTMLDivElement>) => {
      if (!onSelectOption) return
      event.stopPropagation()
      event.preventDefault()
      closeOptions()
      onSelectOption(option)
    },
    [closeOptions, onSelectOption]
  )

  const handleClickOutside = useCallback(() => {
    if (disableOptions) return
    closeOptions()
  }, [closeOptions, disableOptions])

  useClickOutside(contentRef, handleClickOutside)

  return (
    <div
      className={`${styles['mega-menu-search-bar__input-content']}`}
      onClick={disableOptions ? undefined : handleShowOptions(true)}
      ref={contentRef}
    >
      <Input
        mainClassName={`${styles['mega-menu-search-bar__input']} ${className ? className : ''}`}
        value={termValue}
        onChange={onSearchValues}
        customIcon={icon}
        type="text"
        placeholder={placeholder}
        actionIcon={actionIcon}
        onKeyDown={onPressKey}
      />
      {!disableOptions && showOptions && (
        <div className={styles['mega-menu-search-bar__input-options']} ref={optionsRef}>
          {sectionTitle && !recentSearch && renderSectionTitle}
          {options.length > 0 &&
            (!recentSearch || termValue?.length > 0) &&
            options.map(({ title, subtitle, url, field }: ISearchOptions, index: number) => (
              <div
                className={`${styles['mega-menu-search-bar__input-option']} ${
                  selectedOption == index ? styles['mega-menu-search-bar__input-option--selected'] : ''
                }`}
                onClick={onPressOption({ title, subtitle, url, field })}
                key={index}
              >
                <a href={url} ref={linkRef}>
                  <p className={styles['mega-menu-search-bar__input-option__title']}>{title}</p>
                  <p className={styles['mega-menu-search-bar__input-option__subtitle']}>{subtitle}</p>
                </a>
              </div>
            ))}
          {options.length === 0 && !recentSearch && (
            <MegaMenuEmpty
              title={noContent?.title ?? ''}
              subtitle={noContent?.subtitle ?? ''}
              imageHeight={120}
              customStyle={{ title: { fontSize: 16 }, subtitle: { fontSize: 14 }, content: { gap: 0 } }}
            />
          )}
          {recentSearch && termValue?.length === 0 && (
            <div className={styles['mega-menu-search-bar__input-options--recent']}>
              <h4>{recentSearch.recentSearchesTitle}</h4>
              {recentSearch.recentSearches.map((option, index) => (
                <div
                  className={`${styles['mega-menu-search-bar__input-option']}`}
                  onClick={onPressOption(option)}
                  key={index}
                >
                  <a href={option.url} ref={linkRef}>
                    <p className={styles['mega-menu-search-bar__input-option__title']}>{option.title}</p>
                  </a>
                </div>
              ))}
              <h4>{recentSearch.mostSearchedTitle}</h4>
              {recentSearch.mostSearched.map((option, index) => (
                <div
                  className={`${styles['mega-menu-search-bar__input-option']}`}
                  onClick={onPressOption(option)}
                  key={index}
                >
                  <a href={option.url} ref={linkRef}>
                    <p className={styles['mega-menu-search-bar__input-option__title']}>{option.title}</p>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchBar
