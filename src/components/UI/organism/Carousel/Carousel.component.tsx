import { useMediaQuery } from '@components/hooks'
import { useCarouselScroll } from '@components/hooks/useCarouselScroll'
import { carouselPrefix } from '@constants/stories'
import { classNames } from '@shared/utils/common'
import React, { useMemo, useRef } from 'react'
import { ICarousel } from './Carousel.interface'
import styles from './Carousel.module.scss'
import { CarouselButtons } from './children/CarouselButtons/CarouselButtons.component'
import { CarouselFooter } from './children/CarouselFooter/CarouselFooter.component'
import { CarouselHeader } from './children/CarouselHeader/CarouselHeader.component'
import { CarouselItems } from './children/CarouselItems/CarouselItems.component'
import { getAllItems, getChildrenByType } from '@utils/domNode/nodeCount.util'

const cx = classNames.bind(styles)

const Component: React.FC<ICarousel> = ({
  children,
  classNamesObject,
  autoScroll = true,
  scrollInterval = 15,
  mobileScrollable = true,
  sizeButtons = 16,
  itemsPerSection = 3,
  gap = 16,
  maxContainerWidth = '100%',
  currentIndex: controlledIndex,
  onChangeSlide
}) => {
  const itemsContainerRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery(false, { xs: true, sm: true, md: true })
  const allItems = getAllItems(children, CarouselItems)
  const totalSections = Math.ceil(allItems.length / itemsPerSection)
  const gapClass = useMemo(() => `${carouselPrefix}__gap-${gap}`, [gap])

  const { currentIndex: internalIndex, changeSlide: internalChangeSlide } = useCarouselScroll({
    totalSections,
    autoScroll,
    scrollInterval,
    isDisabled: isMobile
  })

  const currentIndex = controlledIndex ?? internalIndex
  const changeSlide = (dir: 1 | -1) => {
    if (typeof controlledIndex === 'number' && onChangeSlide) {
      const next = (controlledIndex + dir + totalSections) % totalSections
      onChangeSlide(next)
    } else {
      internalChangeSlide(dir)
    }
  }

  const renderButtons = () =>
    !isMobile &&
    totalSections > 1 && (
      <CarouselButtons
        onNextSlide={() => changeSlide(1)}
        onPrevSlide={() => changeSlide(-1)}
        size={sizeButtons}
        className={classNamesObject?.buttons}
      />
    )

  // Render items based on whether the carousel is responsive or not
  const renderItems = () =>
    isMobile ? (
      <div
        className={cx(
          mobileScrollable ? `${carouselPrefix}__mobile-slider` : `${carouselPrefix}__mobile-noScroll`,
          gapClass,
          classNamesObject?.items
        )}
        ref={itemsContainerRef}
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
            `${carouselPrefix}__section--flex`,
            { [`${carouselPrefix}__section--active`]: i === currentIndex },
            gapClass,
            classNamesObject?.item
          )}
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
      className={cx(
        carouselPrefix,
        { [`${carouselPrefix}--mobile`]: mobileScrollable && isMobile },
        classNamesObject?.base
      )}
      style={{ maxWidth: maxContainerWidth }}
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
