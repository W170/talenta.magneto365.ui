import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ISearchBar, ISearchOptions } from './MegaMenuSearchBar.interface'
import styles from './MegaMenuSearchBar.module.scss'
import { IconItem } from '@components/UI/atoms'
import { Input } from '../Input'
import { useClickOutside } from '@components/hooks/useClickOutside'
import { CurrentLocation } from '@constants/icons.constants'
import { MegaMenuEmpty } from '@components/UI/molecules'

const AVAILABLE_KEYS = ['Enter', 'ArrowDown', 'ArrowUp', 'Escape']

const SearchBar: React.FC<ISearchBar> = ({
  icon,
  onSearch,
  className,
  placeholder,
  termValue,
  actionIcon,
  options = [],
  sectionTitle,
  onSelectOption,
  noContent,
  recentSearch,
  disableOptions = false,
  onSubmit
}) => {
  const [selectedOption, setSelectedOption] = useState(0)
  const [showOptions, setShowOptions] = useState(false)
  const optionLinksRef = useRef<(HTMLAnchorElement | null)[]>([])
  const optionsRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const safeOptions = useMemo<ISearchOptions[]>(() => (Array.isArray(options) ? options : []), [options])

  useEffect(() => {
    setSelectedOption(0)
    optionLinksRef.current = []
  }, [safeOptions, termValue])

  const renderSectionTitle = useMemo(() => {
    if (!sectionTitle || termValue) return null
    const { title, url, onClick } = sectionTitle
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
      const value = event.target.value
      onSearch(value)
      if (!disableOptions && String(value ?? '').trim().length >= 2) {
        setShowOptions(true)
      }
    },
    [disableOptions, onSearch]
  )

  const closeOptions = useCallback(() => {
    setShowOptions(false)
  }, [])

  const blurInput = useCallback(() => {
    requestAnimationFrame(() => {
      contentRef.current?.querySelector<HTMLInputElement>('input')?.blur()
    })
  }, [])

  useEffect(() => {
    if (!showOptions) return
    const container = optionsRef.current
    const selectedEl = optionLinksRef.current[selectedOption]
    if (!container || !selectedEl) return
    const containerRect = container.getBoundingClientRect()
    const elRect = selectedEl.getBoundingClientRect()
    const isOutOfView = elRect.top < containerRect.top || elRect.bottom > containerRect.bottom
    if (isOutOfView) selectedEl.scrollIntoView({ block: 'nearest' })
  }, [selectedOption, showOptions])

  const onPressKey = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      const { key } = event

      if (key === 'Escape') {
        closeOptions()
        return
      }

      if (key === 'Enter') {
        if (!disableOptions && showOptions) {
          const option = safeOptions[selectedOption]
          if (option) {
            event.preventDefault()
            closeOptions()
            blurInput()
            onSelectOption?.(option)
            return
          }
        }

        if (onSubmit) {
          event.preventDefault()
          closeOptions()
          blurInput()
          onSubmit(event.currentTarget.value)
        }
        return
      }

      if (!AVAILABLE_KEYS.includes(key) || disableOptions || !showOptions) return

      setSelectedOption((current) => {
        if (key === 'ArrowDown' && current < safeOptions.length - 1) return current + 1
        if (key === 'ArrowUp' && current > 0) return current - 1
        return current
      })
    },
    [blurInput, closeOptions, disableOptions, onSelectOption, onSubmit, safeOptions, selectedOption, showOptions]
  )

  const onPressOption = useCallback(
    (option: ISearchOptions) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      closeOptions()
      blurInput()
      onSelectOption?.(option)
    },
    [blurInput, closeOptions, onSelectOption]
  )

  const handleClickOutside = useCallback(() => {
    if (!disableOptions) closeOptions()
  }, [closeOptions, disableOptions])

  useClickOutside(contentRef, handleClickOutside)

  return (
    <div className={styles['mega-menu-search-bar__input-content']} ref={contentRef}>
      <Input
        mainClassName={`${styles['mega-menu-search-bar__input']} ${className ?? ''}`}
        value={termValue}
        onChange={onSearchValues}
        customIcon={icon}
        type="text"
        placeholder={placeholder}
        actionIcon={actionIcon}
        onKeyDown={onPressKey}
        onFocus={() => !disableOptions && setShowOptions(true)}
      />

      {!disableOptions && showOptions && (
        <div className={styles['mega-menu-search-bar__input-options']} ref={optionsRef}>
          {sectionTitle && !recentSearch && renderSectionTitle}

          {safeOptions.length > 0 &&
            (!recentSearch || termValue?.length > 0) &&
            safeOptions.map(({ title, subtitle, url, field }, index) => (
              <div
                className={`${styles['mega-menu-search-bar__input-option']} ${
                  selectedOption === index ? styles['mega-menu-search-bar__input-option--selected'] : ''
                }`}
                key={`${title}-${index}`}
              >
                <a
                  href={url}
                  onClick={onPressOption({ title, subtitle, url, field })}
                  ref={(el) => (optionLinksRef.current[index] = el)}
                >
                  <p className={styles['mega-menu-search-bar__input-option__title']}>{title}</p>
                  {subtitle && <p className={styles['mega-menu-search-bar__input-option__subtitle']}>{subtitle}</p>}
                </a>
              </div>
            ))}

          {safeOptions.length === 0 && !recentSearch && (
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
                <div className={styles['mega-menu-search-bar__input-option']} key={`recent-${index}`}>
                  <a href={option.url} onClick={onPressOption(option)}>
                    <p className={styles['mega-menu-search-bar__input-option__title']}>{option.title}</p>
                  </a>
                </div>
              ))}
              <h4>{recentSearch.mostSearchedTitle}</h4>
              {recentSearch.mostSearched.map((option, index) => (
                <div className={styles['mega-menu-search-bar__input-option']} key={`most-${index}`}>
                  <a href={option.url} onClick={onPressOption(option)}>
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
