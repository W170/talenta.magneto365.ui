import React, { FC, Fragment, useMemo } from 'react'
import { FilterSearchItem } from '@components/UI/molecules/FilterSearchItem'
import { Switch } from '@components/UI/atoms/Switch'
import { MobileDrawer } from '@components/UI/molecules/MobileDrawer'
import { IFilterCard } from './FilterCard.interface'
import styles from './FilterCard.module.scss'
import { IconItem } from '@components/UI/atoms'
import { Add, ArrowDown2, SmallClose } from '@constants/icons.constants'
import { getFieldIcon } from '@utils/icons/iconMapping.utils'
import { useFilterCard } from '@components/hooks/filters/useFilterCard'
import { useFilterRendering } from '@components/hooks/filters/useFilterRendering'

export const FilterCard: FC<IFilterCard> = ({
  label,
  values,
  renderType,
  searchPlaceholder = '',
  switchText = '',
  setIsApplied,
  index,
  setCurrentOpenFilter,
  showFilters,
  horizontal,
  ...props
}) => {
  const { state, computed, positions, handlers } = useFilterCard({
    values,
    renderType,
    setIsApplied,
    index,
    setCurrentOpenFilter,
    showFilters,
    horizontal,
    field: props.field
  })

  const { options, showItems, showMobileDrawer, showTooltip, buttonRef } = state

  const { isMobile, hasSearch, hasTotal, appliedOption, appliedValue, hasntOptions, isInteractiveSection } = computed

  const { popoverPosition, tooltipPosition } = positions

  const {
    handleSearch,
    handleShowItems,
    handleCloseMobileDrawer,
    handleOptionSelected,
    handleRemove,
    handleMouseEnter,
    handleMouseLeave,
    handleTouchStart,
    handleTouchEnd
  } = handlers

  const { optionsToRender, horizontalOptionsToRender } = useFilterRendering({
    options,
    appliedOption,
    hasntOptions,
    hasTotal,
    handleOptionSelected,
    props: {
      field: props.field,
      multiple: props.multiple,
      loading: props.loading,
      type: props.type,
      dataType: props.dataType
    }
  })

  // CSS variables for positioning (avoid inline styles)
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

  if (!values.length) return <Fragment />

  // Horizontal layout
  if (horizontal) {
    const icon = getFieldIcon(props.field, props.icon)

    return (
      <div className={styles['magneto-ui-filter-card-horizontal']} style={positionVars}>
        <button
          ref={buttonRef}
          className={`${styles['magneto-ui-horizontal-filter-button']} ${appliedValue ? styles.applied : ''}`}
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
          <span>{appliedValue ? appliedValue.label : label}</span>
          {appliedValue ? (
            <span onClick={handleRemove}>
              <IconItem icon={SmallClose} size={17} />
            </span>
          ) : (
            <IconItem icon={Add} size={19} />
          )}
        </button>

        {showTooltip && (
          <div className={styles['magneto-ui-filter-card-horizontal__tooltip']}>
            {appliedValue ? appliedValue.label : label}
          </div>
        )}

        {showItems && !isMobile && (
          <div className={styles['magneto-ui-filter-card-horizontal__popover-wrapper']} data-popover-index={index}>
            <div className={styles['magneto-ui-filter-card-horizontal__popover']}>
              {hasSearch && (
                <div className={styles['magneto-ui-filter-card__search']}>
                  <FilterSearchItem
                    loading={props.loading}
                    placeholder={searchPlaceholder as string}
                    handleSearch={handleSearch}
                  />
                </div>
              )}
              <div className={styles['magneto-ui-filter-card_options']}>{horizontalOptionsToRender}</div>
            </div>
          </div>
        )}

        <MobileDrawer isOpen={showMobileDrawer} onClose={handleCloseMobileDrawer}>
          <div className={styles['magneto-ui-filter-card-horizontal__drawer-content']}>
            <h3>{label}</h3>
            {hasSearch && (
              <div className={styles['magneto-ui-filter-card__search']}>
                <FilterSearchItem
                  loading={props.loading}
                  placeholder={searchPlaceholder as string}
                  handleSearch={handleSearch}
                />
              </div>
            )}
            <div className={styles['magneto-ui-filter-card_options']}>{horizontalOptionsToRender}</div>
          </div>
        </MobileDrawer>
      </div>
    )
  }

  return (
    <article
      className={`${styles[`magneto-ui-filter-card`]} ${
        hasSearch && showItems && isInteractiveSection ? styles.hasSearch : ''
      }`}
    >
      <div
        className={`${styles[`magneto-ui-filter-card_header`]} ${styles[showItems ? '--open' : '']}`}
        onClick={isInteractiveSection ? handleShowItems : undefined}
      >
        <p>{label}</p>
        {switchText && (
          <Switch title={switchText} setIsActive={(value) => console.log('Change isActive', value)} isActive />
        )}
        {isInteractiveSection && (
          <IconItem icon={ArrowDown2} size={16} className={styles[`magneto-ui-filter-card_header--arrow`]} />
        )}
      </div>

      {showItems && isInteractiveSection && hasSearch && (
        <div className={styles['magneto-ui-filter-card__search']}>
          <FilterSearchItem
            loading={props.loading}
            placeholder={searchPlaceholder as string}
            handleSearch={handleSearch}
          />
        </div>
      )}

      {showItems && <div className={styles['magneto-ui-filter-card_options']}>{optionsToRender}</div>}
    </article>
  )
}
