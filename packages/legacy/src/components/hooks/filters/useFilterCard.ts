import { useState, useCallback, useEffect, useMemo, useRef } from 'react'
import { IFilterValue, ISetIsApplied } from '@components/UI/template'
import { ERenderType } from '@constants/stories'
import { useMediaQuery } from '@components/hooks'
import { usePositionCalculation, Position } from './usePositionCalculation'
import { useFilterEventListeners } from './useFilterEventListeners'

type UseFilterCardProps = {
  /**
   * array of filter values to be displayed in the card
   */
  values: IFilterValue[]
  /**
   * type of rendering for the filter card
   */
  renderType?: ERenderType
  /**
   * function to set the applied filter value
   */
  setIsApplied?: (optionData: ISetIsApplied) => void
  /**
   * index of the filter card
   */
  index: number
  /**
   * function to set the current open filter index
   */
  setCurrentOpenFilter: (index: number) => void
  /**
   * whether to show the filters or not
   */
  showFilters: boolean
  /**
   * whether the filter card is displayed horizontally
   */
  horizontal?: boolean
  /**
   * field name for the filter
   */
  field?: string
}

interface UseFilterCardReturn {
  /**
   * state and computed values for the filter card
   */
  state: {
    options: IFilterValue[]
    showItems: boolean
    showMobileDrawer: boolean
    showTooltip: boolean
    buttonRef: React.RefObject<HTMLButtonElement>
  }
  /**
   * computed properties for the filter card
   */
  computed: {
    isMobile: boolean
    hasSearch: boolean
    hasTotal: boolean
    appliedOption: IFilterValue | undefined
    appliedValue: IFilterValue | undefined
    hasntOptions: boolean
    isInteractiveSection: boolean
  }
  /**
   * positions for popover and tooltip
   */
  positions: {
    popoverPosition: Position
    tooltipPosition: Position
  }
  /**
   * handlers for various interactions in the filter card
   */
  handlers: {
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleShowItems: () => void
    handleCloseMobileDrawer: () => void
    handleOptionSelected: (optionData: ISetIsApplied) => void
    handleRemove: (e: React.MouseEvent) => void
    handleMouseEnter: () => void
    handleMouseLeave: () => void
    handleTouchStart: () => void
    handleTouchEnd: () => void
  }
}

export const useFilterCard = ({
  values,
  renderType,
  setIsApplied,
  index,
  setCurrentOpenFilter,
  showFilters,
  horizontal,
  field
}: UseFilterCardProps): UseFilterCardReturn => {
  const [options, setOptions] = useState<IFilterValue[]>(values)
  const [showItems, setShowItems] = useState<boolean>(showFilters)
  const [showMobileDrawer, setShowMobileDrawer] = useState<boolean>(false)
  const [showTooltip, setShowTooltip] = useState<boolean>(false)
  const [isDragScrolling, setIsDragScrolling] = useState<boolean>(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const isMobile = useMediaQuery(false, {
    xs: true,
    sm: true,
    md: false,
    lg: false,
    xl: false
  })

  // Position calculation
  const { popoverPosition, tooltipPosition, calculatePositions } = usePositionCalculation({
    buttonRef
  })

  // Computed values
  const hasSearch = useMemo(() => renderType === ERenderType.multiSelect, [renderType])
  const hasTotal = useMemo(() => !values.find((value) => value.isApplied), [values])
  const appliedOption = useMemo(() => options.find(({ isApplied }) => isApplied), [options])
  const appliedValue = useMemo(() => values.find((v) => v.isApplied), [values])
  const hasntOptions = useMemo(() => options.every(({ total }) => total == 0 || total == undefined), [options])
  const isInteractiveSection = useMemo(() => !hasntOptions && !appliedOption, [hasntOptions, appliedOption])

  // Search handler
  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
      const searchedOptions = values.filter((opt) => opt.label.toLowerCase().includes(event.target.value.toLowerCase()))
      setOptions(searchedOptions)
    },
    [values]
  )

  // Show items handler
  const handleShowItems = useCallback(() => {
    if (isDragScrolling) return

    if (horizontal && isMobile) {
      setShowMobileDrawer(true)
      return
    }

    const shouldOpenFilter = !showItems
    if (shouldOpenFilter) {
      setCurrentOpenFilter(index)
      calculatePositions()
    } else {
      setCurrentOpenFilter(99)
    }

    if (!horizontal || !isMobile) {
      setShowItems((current) => !current)
    }
  }, [showItems, index, setCurrentOpenFilter, calculatePositions, isDragScrolling, horizontal, isMobile])

  // Close mobile drawer handler
  const handleCloseMobileDrawer = useCallback(() => {
    setShowMobileDrawer(false)
  }, [])

  // Option selection handler
  const handleOptionSelected = useCallback(
    (optionData: ISetIsApplied) => {
      if (setIsApplied) {
        setIsApplied(optionData)
      }

      Promise.resolve().then(() => {
        if (horizontal && !isMobile) {
          setCurrentOpenFilter(99)
          setShowItems(false)
        }

        if (horizontal && isMobile) {
          setShowMobileDrawer(false)
        }
      })
    },
    [setIsApplied, horizontal, isMobile, setCurrentOpenFilter]
  )

  // Remove applied filter handler
  const handleRemove = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      if (appliedValue && setIsApplied) {
        setIsApplied({
          field: field || '',
          ...appliedValue,
          isApplied: true,
          multiple: false
        })
      }
    },
    [appliedValue, setIsApplied, field]
  )

  // Tooltip handlers
  const handleMouseEnter = useCallback(() => {
    if (!showItems) {
      calculatePositions()
      setShowTooltip(true)
    }
  }, [showItems, calculatePositions])

  const handleMouseLeave = useCallback(() => {
    setShowTooltip(false)
  }, [])

  const handleTouchStart = useCallback(() => {
    if (!showItems) {
      const touchTimer = setTimeout(() => {
        calculatePositions()
        setShowTooltip(true)
      }, 500)

      buttonRef.current?.setAttribute('data-touch-timer', touchTimer.toString())
    }
  }, [showItems, calculatePositions])

  const handleTouchEnd = useCallback(() => {
    const timer = buttonRef.current?.getAttribute('data-touch-timer')
    if (timer) {
      clearTimeout(parseInt(timer))
      buttonRef.current?.removeAttribute('data-touch-timer')
    }

    setTimeout(() => {
      setShowTooltip(false)
    }, 2000)
  }, [])

  // Event listeners
  useFilterEventListeners({
    horizontal,
    showItems,
    showTooltip,
    isMobile,
    index,
    buttonRef,
    setCurrentOpenFilter,
    setShowItems,
    setShowTooltip,
    setIsDragScrolling,
    calculatePositions
  })

  useEffect(() => {
    const shouldShowItemsForAppliedOption = appliedOption !== undefined && !horizontal
    if (shouldShowItemsForAppliedOption) {
      setShowItems(true)
    }
  }, [appliedOption, horizontal])

  useEffect(() => {
    setOptions(values)
  }, [values])

  useEffect(() => {
    const shouldUpdateShowItems = !appliedOption && !hasntOptions && showFilters !== showItems
    if (shouldUpdateShowItems) setShowItems(showFilters)
  }, [showFilters, appliedOption, hasntOptions, showItems])

  useEffect(() => {
    if (!horizontal) return
    setShowItems(showFilters)
    if (!showFilters) setCurrentOpenFilter(99)
  }, [horizontal, showFilters, setCurrentOpenFilter])

  return {
    state: {
      options,
      showItems,
      showMobileDrawer,
      showTooltip,
      buttonRef
    },
    computed: {
      isMobile,
      hasSearch,
      hasTotal,
      appliedOption,
      appliedValue,
      hasntOptions,
      isInteractiveSection
    },
    positions: {
      popoverPosition,
      tooltipPosition
    },
    handlers: {
      handleSearch,
      handleShowItems,
      handleCloseMobileDrawer,
      handleOptionSelected,
      handleRemove,
      handleMouseEnter,
      handleMouseLeave,
      handleTouchStart,
      handleTouchEnd
    }
  }
}
