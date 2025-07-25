import React, { FC, Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { FilterSearchItem } from '@components/UI/molecules/FilterSearchItem'
import { FilterMenuItem } from '@components/UI/molecules/FilterMenuItem'
import { Switch } from '@components/UI/atoms/Switch'
import { MobileDrawer } from '@components/UI/molecules/MobileDrawer'
import { MenuSearch } from '@components/UI/molecules/MenuSearch'
import { ISearchRenderTypeOption } from '@components/UI/template'
import { IFilterCardOnSearch, ISetIsAppliedProps } from './FilterCardOnSearch.interface'
import { cleanSearch, getValues, refreshChildren, refreshParents } from './utils'
import { useKeyboard } from './hooks'
import { useMediaQuery } from '@components/hooks'
import { getFieldIcon } from '@utils/icons/iconMapping.utils'
import styles from './FilterCardOnSearch.module.scss'
import { IconItem } from '@components/UI/atoms'
import { Add, SmallClose } from '@constants/icons.constants'

export const FilterCardOnSearch: FC<IFilterCardOnSearch> = ({
  label,
  field,
  repository,
  child,
  filtersApplied,
  params,
  searchPlaceholder = '',
  switchText = '',
  setIsApplied,
  unApplyWithChild,
  getOptionsOnLoad,
  getOptionsOnSearch,
  horizontal,
  ...props
}) => {
  const [options, setOptions] = useState<ISearchRenderTypeOption[]>([])
  const [appliedOptions, setAppliedOptions] = useState<ISearchRenderTypeOption[]>([])
  const [refInput, setRefInput] = useState<React.RefObject<HTMLInputElement> | null>(null)
  const [showMobileDrawer, setShowMobileDrawer] = useState<boolean>(false)
  const [popoverPosition, setPopoverPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 })
  const [tooltipPosition, setTooltipPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 })
  const [showTooltip, setShowTooltip] = useState<boolean>(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const isMobile = useMediaQuery(false, {
    xs: true,
    sm: true,
    md: false,
    lg: false,
    xl: false
  })

  const [keyboardIndex] = useKeyboard(field, options.length, () => cleanSearch(refInput, setOptions))
  const values = useMemo(() => getValues(filtersApplied), [filtersApplied])

  // this effect load labels when page is reloaded
  useEffect(() => {
    if (values && values.length > appliedOptions?.length && !options.length) {
      getOptionsOnLoad(field, values)?.then((opt) => setAppliedOptions(opt))
    }
  }, [field, values, appliedOptions, options.length, getOptionsOnLoad])

  const positionVars = useMemo(
    () =>
      ({
        '--popover-top': `${popoverPosition.top}px`,
        '--popover-left': `${popoverPosition.left}px`,
        '--tooltip-top': `${tooltipPosition.top}px`,
        '--tooltip-left': `${tooltipPosition.left}px`
      } as React.CSSProperties),
    [popoverPosition.top, popoverPosition.left, tooltipPosition.top, tooltipPosition.left]
  )

  const calculatePositions = useCallback(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setTooltipPosition({
        top: rect.bottom + 2,
        left: rect.left + rect.width / 2 - 50
      })
    }
  }, [])

  useEffect(() => refreshChildren(params, setAppliedOptions), [params])

  useEffect(() => refreshParents(filtersApplied, setAppliedOptions), [filtersApplied])

  const handleShowItems = useCallback(() => {
    if (horizontal && !props.showFilters && isMobile) {
      setShowMobileDrawer(true)
      props.setCurrentOpenFilter(props.index)
      return
    }

    if (horizontal && !props.showFilters && !isMobile) {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect()
        setPopoverPosition({
          top: rect.bottom + 4,
          left: rect.left
        })
      }
      props.setCurrentOpenFilter(props.index)
      return
    }

    if (horizontal && props.showFilters) {
      props.setCurrentOpenFilter(99)
      setShowMobileDrawer(false)
      return
    }

    if (!horizontal) {
      if (!props.showFilters) {
        props.setCurrentOpenFilter(props.index)
        calculatePositions()
      } else {
        props.setCurrentOpenFilter(99)
      }
    }
  }, [props, calculatePositions, horizontal, isMobile])

  const handleCloseMobileDrawer = useCallback(() => {
    setShowMobileDrawer(false)
  }, [])

  const handleSearch = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>, inputRef: React.MutableRefObject<null>) => {
      event.preventDefault()
      !refInput && setRefInput(inputRef)
      // setSearching(true);
      const searchedOptions = await getOptionsOnSearch({
        repository,
        field,
        value: event.target.value,
        params
      })
      // setSearching(false);
      if (!searchedOptions) return
      setOptions(searchedOptions.filter((opt) => !appliedOptions.find((optApplied) => optApplied.id === opt.id)))
    },
    [getOptionsOnSearch, appliedOptions, repository, field, params, refInput]
  )

  const callSetIsApplied = useCallback(
    (filter: ISetIsAppliedProps) => {
      setIsApplied(filter)?.then(() => {
        const totalApplied = filter.isApplied
          ? appliedOptions.filter((opt) => opt.id !== filter.id)
          : filter.multiple
          ? [...appliedOptions, { ...options.filter((opt) => opt.id === filter.id)[0], isApplied: true }]
          : [{ ...options.filter((opt) => opt.id === filter.id)[0], isApplied: true }]
        setAppliedOptions(totalApplied)
      })
      cleanSearch(refInput, setOptions)
    },
    [appliedOptions, options, setIsApplied, refInput]
  )

  const handleOptionSelected = useCallback(
    (filter: ISetIsAppliedProps) => {
      callSetIsApplied(filter)

      Promise.resolve().then(() => {
        if (horizontal && !isMobile) {
          props.setCurrentOpenFilter(99)
        }

        if (horizontal && isMobile) {
          setShowMobileDrawer(false)
        }
      })
    },
    [callSetIsApplied, horizontal, isMobile, props]
  )

  const handleApply = useCallback(
    (filter: ISetIsAppliedProps) => {
      const isHorizontalDesktop = horizontal && !isMobile
      const isHorizontalMobile = horizontal && isMobile

      const closeFilters = () => {
        if (isHorizontalDesktop) {
          props.setCurrentOpenFilter(99)
        }
        if (isHorizontalMobile) {
          setShowMobileDrawer(false)
        }
      }

      if (child && filter.isApplied) {
        return unApplyWithChild({ child, parentId: filter.id, parentField: filter.field }).then(() => {
          setAppliedOptions((current) => current.filter((opt) => opt.id !== filter.id))
          closeFilters()
        })
      }

      if (child && !filter.multiple && appliedOptions.length) {
        return unApplyWithChild({
          child,
          parentId: appliedOptions[0].id,
          parentField: filter.field,
          newParentId: filter.id
        }).then(() => {
          const newParent = options.find((opt) => opt.id === filter.id)
          newParent && setAppliedOptions([{ ...newParent, isApplied: true }])
          cleanSearch(refInput, setOptions)
          closeFilters()
        })
      }

      if (horizontal) {
        handleOptionSelected(filter)
      } else {
        callSetIsApplied(filter)
      }
    },
    [
      unApplyWithChild,
      callSetIsApplied,
      handleOptionSelected,
      refInput,
      child,
      appliedOptions,
      options,
      horizontal,
      isMobile,
      props
    ]
  )

  const displayMenuSearch = useMemo(() => {
    return (
      <MenuSearch
        show={!!options.length}
        handleOnBlur={() => cleanSearch(refInput, setOptions, 300)}
        content={options.map((opt, key) => {
          const optProps = { ...props, ...opt, field, setIsApplied: handleApply, isSearched: true }
          return (
            <FilterMenuItem
              key={`${opt.id}-${opt.label}`}
              customId={`${field}-menu-item-${key}`}
              customClass={`${key === keyboardIndex ? styles.selected : ''}`}
              {...optProps}
            />
          )
        })}
      >
        <FilterSearchItem
          placeholder={searchPlaceholder as string}
          disabled={params ? !params.length : false}
          loading={props.loading}
          handleSearch={handleSearch}
        />
      </MenuSearch>
    )
  }, [options, field, params, searchPlaceholder, props, refInput, keyboardIndex, handleApply, handleSearch])

  const displayAppliedOptions = useMemo(() => {
    return (
      <div className={styles['magneto-ui-filter-onSearch_options']}>
        {appliedOptions.map((opt, key) => {
          const optProps = { ...props, ...opt, field, setIsApplied: handleApply, isSearched: true }
          return <FilterMenuItem key={`${key}-${opt.label}`} {...optProps} />
        })}
      </div>
    )
  }, [appliedOptions, field, props, handleApply])

  const displayChild = useMemo(() => {
    if (!child) return <Fragment />
    const childProps = {
      ...props,
      ...child,
      params: values as number[] | string[],
      setIsApplied,
      unApplyWithChild,
      getOptionsOnLoad,
      getOptionsOnSearch
    }
    return <FilterCardOnSearch {...childProps} />
  }, [setIsApplied, unApplyWithChild, getOptionsOnLoad, getOptionsOnSearch, values, props, child])

  useEffect(() => {
    if (horizontal && (props.showFilters || showTooltip)) {
      const handleScroll = () => calculatePositions()

      window.addEventListener('scroll', handleScroll, true)
      window.addEventListener('resize', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll, true)
        window.removeEventListener('resize', handleScroll)
      }
    }
  }, [horizontal, props.showFilters, showTooltip, calculatePositions])

  useEffect(() => {
    if (horizontal) {
      const handleContainerScroll = () => {
        props.setCurrentOpenFilter(99)
        setShowTooltip(false)
      }

      const scrollContainer = document.querySelector('.magneto-ui-horizontal-filter__scroll-container')
      if (scrollContainer) {
        scrollContainer.addEventListener('scroll', handleContainerScroll, { passive: true })

        return () => {
          scrollContainer.removeEventListener('scroll', handleContainerScroll)
        }
      }
    }
  }, [horizontal, props])

  useEffect(() => {
    if (props.showFilters) {
      setShowTooltip(false)
    }
  }, [props.showFilters])

  if (horizontal) {
    const appliedValue = appliedOptions.length > 0 ? appliedOptions.map((o) => o.label).join(', ') : ''
    const icon = getFieldIcon(field, props.icon)

    const handleRemove = (e: React.MouseEvent, opt: ISearchRenderTypeOption) => {
      e.stopPropagation()
      handleApply({ ...props, ...opt, field, isApplied: true })
    }

    const handleMouseEnter = () => {
      if (!props.showFilters) {
        calculatePositions()
        setShowTooltip(true)
      }
    }

    const handleMouseLeave = () => {
      setShowTooltip(false)
    }

    const handleTouchStart = () => {
      if (!props.showFilters) {
        const touchTimer = setTimeout(() => {
          calculatePositions()
          setShowTooltip(true)
        }, 500)

        buttonRef.current?.setAttribute('data-touch-timer', touchTimer.toString())
      }
    }

    const handleTouchEnd = () => {
      const timer = buttonRef.current?.getAttribute('data-touch-timer')
      if (timer) {
        clearTimeout(parseInt(timer))
        buttonRef.current?.removeAttribute('data-touch-timer')
      }

      setTimeout(() => {
        setShowTooltip(false)
      }, 2000)
    }

    const buttonContent = (
      <button
        ref={buttonRef}
        className={`${styles['magneto-ui-horizontal-filter-button']}`}
        onClick={appliedValue ? undefined : handleShowItems}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <IconItem
          icon={icon}
          size={20}
          className={!appliedValue ? styles['magneto-ui-horizontal-filter-button--grayscale'] : ''}
        />
        <span>{appliedValue || label}</span>
        {appliedValue ? (
          <span onClick={(e) => handleRemove(e, appliedOptions[0])}>
            <IconItem icon={SmallClose} size={17} />
          </span>
        ) : (
          <IconItem icon={Add} size={19} />
        )}
      </button>
    )

    return (
      <div className={styles['magneto-ui-filter-card-horizontal']} style={positionVars}>
        {buttonContent}
        {showTooltip && (
          <div className={styles['magneto-ui-filter-card-horizontal__tooltip']}>{appliedValue || label}</div>
        )}

        {props.showFilters && !isMobile && (
          <div className={styles['magneto-ui-filter-card-horizontal__popover']}>
            <div className={styles['magneto-ui-filter-card_options']}>{displayAppliedOptions}</div>
            {displayMenuSearch}
          </div>
        )}

        {isMobile && (
          <MobileDrawer isOpen={showMobileDrawer} onClose={handleCloseMobileDrawer}>
            <div className={styles['magneto-ui-filter-card-horizontal__drawer-content']}>
              <h3>{label}</h3>
              <div className={styles['magneto-ui-filter-card_options']}>{displayAppliedOptions}</div>
              {displayMenuSearch}
            </div>
          </MobileDrawer>
        )}
      </div>
    )
  }

  return (
    <article className={`${styles['magneto-ui-filter-onSearch']} ${styles.hasSearch}`}>
      <div className={styles['magneto-ui-filter-onSearch_header']}>
        <p>{label}</p>
        {switchText && (
          <Switch title={switchText} setIsActive={(value) => console.log('Change isActive', value)} isActive />
        )}
      </div>
      {displayMenuSearch}
      {displayAppliedOptions}
      {displayChild}
    </article>
  )
}
