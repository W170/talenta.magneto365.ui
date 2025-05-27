import React, { useCallback, useEffect, useState, useRef } from 'react'
import styles from './Carousel.module.scss'
import { CarouselButtons } from './children/CarouselButtons/CarouselButtons.component'
import { CarouselFooter } from './children/CarouselFooter/CarouselFooter.component'
import { CarouselHeader } from './children/CarouselHeader/CarouselHeader.component'
import { CarouselItems } from './children/CarouselItems/CarouselItems.component'
import { classNames } from '@shared/utils/common'
import { carouselPrefix } from '@constants/stories'
import { useMediaQuery } from '@components/hooks'
import { ICarousel } from './Carousel.interface'

const cx = classNames.bind(styles)

const getChildrenByType = (children: React.ReactNode, type: React.ElementType) =>
  React.Children.toArray(children).filter((child) => React.isValidElement(child) && child.type === type)

const getAllItems = (children: React.ReactNode) => {
  const items: React.ReactNode[] = []
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child.type === CarouselItems)
      React.Children.forEach(child.props.children, (item) => items.push(item))
  })
  return items
}

const Component: React.FC<ICarousel> = ({
  children,
  classNamesObject,
  autoScroll = true,
  scrollInterval = 15,
  responsive = true,
  sizeButtons = 16,
  itemsPerSection = 3,
  gap = 16,
  maxContainerWidth = '100%'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsContainerRef = useRef<HTMLDivElement>(null)
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const isMobile = useMediaQuery(false, { xs: true, sm: true, md: true })
  const allItems = getAllItems(children)
  const totalSections = Math.ceil(allItems.length / itemsPerSection)

  const setupAutoScrollInterval = useCallback(() => {
    if (autoScrollIntervalRef.current) clearInterval(autoScrollIntervalRef.current)
    if (autoScroll && !isMobile && totalSections > 1)
      autoScrollIntervalRef.current = setInterval(
        () => setCurrentIndex((i) => (i + 1) % totalSections),
        scrollInterval * 1000
      )
  }, [autoScroll, scrollInterval, isMobile, totalSections])

  // Set up auto-scroll interval on mount and when dependencies change
  useEffect(() => {
    setupAutoScrollInterval()
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current)
      }
    }
  }, [setupAutoScrollInterval])

  // Adjust current index if it exceeds total sections
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, Math.max(totalSections - 1, 0)))
  }, [totalSections])

  const changeSlide = (dir: 1 | -1) => {
    setCurrentIndex((i) => (i + dir + totalSections) % totalSections)
    setupAutoScrollInterval()
  }

  const renderButtons = () =>
    !isMobile &&
    totalSections > 1 && (
      <CarouselButtons
        nextSlide={() => changeSlide(1)}
        prevSlide={() => changeSlide(-1)}
        size={sizeButtons}
        className={classNamesObject?.buttons}
      />
    )

  // Render items based on whether the carousel is responsive or not
  const renderItems = () =>
    isMobile ? (
      <div
        className={cx(
          responsive ? `${carouselPrefix}__mobile-slider` : `${carouselPrefix}__mobile-noScroll`,
          classNamesObject?.items
        )}
        ref={itemsContainerRef}
        style={{ gap: `${gap}px` }}
      >
        {allItems.map((item, idx) => (
          <div key={idx} className={cx(`${carouselPrefix}__mobile-item`, classNamesObject?.item)}>
            {item}
          </div>
        ))}
      </div>
    ) : (
      Array.from({ length: totalSections }, (_, i) => (
        <div
          key={i}
          className={cx(
            `${carouselPrefix}__section`,
            { [`${carouselPrefix}__section--active`]: i === currentIndex },
            classNamesObject?.item
          )}
          style={{
            gap: `${gap}px`,
            display: 'flex',
            flexWrap: 'nowrap',
            justifyContent: 'flex-start'
          }}
        >
          {allItems.slice(i * itemsPerSection, (i + 1) * itemsPerSection).map((item, idx) => (
            <div key={idx} className={cx(`${carouselPrefix}__grid-item`)}>
              {item}
            </div>
          ))}
        </div>
      ))
    )

  return (
    <div
      className={cx(carouselPrefix, { [`${carouselPrefix}--mobile`]: responsive && isMobile }, classNamesObject?.base)}
      style={{ maxWidth: maxContainerWidth, margin: '0 auto' }}
    >
      <div className={cx(`${carouselPrefix}__header-container`, classNamesObject?.headerContainer)}>
        {getChildrenByType(children, CarouselHeader)}
        {renderButtons()}
      </div>
      <div className={cx(`${carouselPrefix}__items_container`, classNamesObject?.items)}>{renderItems()}</div>
      {getChildrenByType(children, CarouselFooter)}
    </div>
  )
}

export const Carousel = Object.assign(Component, {
  Items: CarouselItems,
  Header: CarouselHeader,
  Footer: CarouselFooter,
  Button: CarouselButtons
})
