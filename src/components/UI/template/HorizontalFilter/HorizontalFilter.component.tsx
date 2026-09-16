import React, { FC, useMemo, useState, useRef, useEffect } from 'react'
import { IHorizontalFilter } from './HorizontalFilter.interface'
import { CardByRenderType } from '../SideFilter/factory'
import styles from './HorizontalFilter.module.scss'
import { IconItem } from '@components/UI/atoms'
import { ArrowLeft2, ArrowRight2, Broom } from '@constants/icons.constants'
import { useElementOverflow } from '@components/hooks/useElementOverflow'

const HorizontalFilter: FC<IHorizontalFilter> = ({
  title,
  buttonText,
  filters = [],
  setIsApplied,
  unApplyWithChild,
  getOptionsOnLoad,
  getOptionsOnSearch,
  loading,
  isFiltersOpen,
  totalAppliedFilters,
  clearFilters
}) => {
  const [currentOpenFilter, setCurrentOpenFilter] = useState<number>(99)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, scrollLeft: 0 })
  const isOverflownRight = useElementOverflow(scrollContainerRef, 'right', [filters])
  const isOverflownLeft = useElementOverflow(scrollContainerRef, 'left', [filters])

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true)
      setDragStart({
        x: e.pageX - scrollContainer.offsetLeft,
        scrollLeft: scrollContainer.scrollLeft
      })
      scrollContainer.style.cursor = 'grabbing'
      scrollContainer.style.userSelect = 'none'
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      e.preventDefault()
      const x = e.pageX - scrollContainer.offsetLeft
      const walk = (x - dragStart.x) * 2
      scrollContainer.scrollLeft = dragStart.scrollLeft - walk
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      scrollContainer.style.cursor = 'grab'
      scrollContainer.style.userSelect = 'auto'
    }

    const handleMouseLeave = () => {
      setIsDragging(false)
      scrollContainer.style.cursor = 'grab'
      scrollContainer.style.userSelect = 'auto'
    }

    scrollContainer.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    scrollContainer.addEventListener('mouseleave', handleMouseLeave)

    scrollContainer.style.cursor = 'grab'

    return () => {
      scrollContainer.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isDragging, dragStart])

  const cardProps = useMemo(() => {
    return {
      setIsApplied,
      unApplyWithChild,
      getOptionsOnLoad,
      getOptionsOnSearch,
      loading
    }
  }, [setIsApplied, unApplyWithChild, getOptionsOnLoad, getOptionsOnSearch, loading])

  const displayFilters = useMemo(() => {
    return filters?.map((item, i) => {
      return (
        <CardByRenderType
          key={`${i}-${item.field}`}
          {...item}
          index={i}
          showFilters={currentOpenFilter === i}
          setCurrentOpenFilter={setCurrentOpenFilter}
          {...cardProps}
          horizontal={true}
        />
      )
    })
  }, [filters, cardProps, currentOpenFilter])

  useEffect(() => {
    const { body } = document
    if (!body) return
    body.style.overflowY = isFiltersOpen ? 'hidden' : 'auto'
  }, [isFiltersOpen])

  const handleClearFilters = () => {
    if (clearFilters) {
      clearFilters()
    }
  }

  const handleScrollLeft = () => {
    const el = scrollContainerRef.current
    if (!el) return

    const children = Array.from(el.children) as HTMLElement[]

    const prevHiddenChild = [...children].reverse().find((child) => {
      return child.offsetLeft < el.scrollLeft
    })

    console.log('prevHiddenChild', prevHiddenChild)

    if (prevHiddenChild) {
      el.scrollTo({ left: prevHiddenChild.offsetLeft - prevHiddenChild.offsetWidth, behavior: 'smooth' })
    } else {
      el.scrollTo({ left: 0, behavior: 'smooth' })
    }
  }

  const handleScrollRight = () => {
    const el = scrollContainerRef.current
    if (!el) return

    const containerRect = el.getBoundingClientRect()
    const children = Array.from(el.children) as HTMLElement[]

    const nextHiddenChild = children.find((child) => {
      const childRect = child.getBoundingClientRect()
      return childRect.right > containerRect.right + 1
    })

    if (nextHiddenChild) {
      // Alinea el siguiente item al inicio para evitar cortes
      el.scrollTo({ left: nextHiddenChild.offsetLeft, behavior: 'smooth' })
    } else {
      el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' })
    }
  }

  return (
    <div className={styles['magneto-ui-horizontal-filter']}>
      <div className={styles['magneto-ui-horizontal-filter__header']}>
        <span>
          {title} ({totalAppliedFilters})
        </span>

        <button
          className={`${styles['magneto-ui-horizontal-filter__clear-button']} ${
            totalAppliedFilters > 0 ? '' : styles['magneto-ui-horizontal-filter__clear-button--disabled']
          }`}
          onClick={handleClearFilters}
        >
          <IconItem icon={Broom} size={18} />
          <span>{buttonText}</span>
        </button>
      </div>

      <div className={styles['magneto-ui-horizontal-filter__filters-container']}>
        <div className={styles['btn-prev-container']}>
          {isOverflownLeft && (
            <button onClick={handleScrollLeft} className={styles['btn-prev']} type="button">
              <IconItem icon={ArrowLeft2} size={18} />
            </button>
          )}
        </div>
        <div ref={scrollContainerRef} className={styles['magneto-ui-horizontal-filter__scroll-container']}>
          {displayFilters}
        </div>
        <div className={styles['btn-next-container']}>
          {isOverflownRight && (
            <button onClick={handleScrollRight} className={styles['btn-next']} type="button">
              <IconItem icon={ArrowRight2} size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default HorizontalFilter
