import { IconItem } from '@components/UI/atoms/Icon'
import { ArrowLeft2, ArrowRight2 } from '@constants/icons.constants'
import React from 'react'
import styles from '../../Carousel.module.scss'
import { carouselPrefix } from '@constants/stories/carousel.constants'
import { classNames } from '@shared/utils/common'
import { ICarousel } from '../../Carousel.interface'

const cx = classNames.bind(styles)

export const CarouselButtons: React.FC<ICarousel.Buttons> = ({
  onPrevSlide,
  onNextSlide,
  className,
  size,
  icons = { left: ArrowLeft2, right: ArrowRight2 }
}) => {
  return (
    <div className={cx(styles[`${carouselPrefix}__buttons`], className)}>
      <button className={styles.carousel__button} onClick={onPrevSlide}>
        <IconItem icon={icons.left} size={size} />
      </button>
      <button className={styles.carousel__button} onClick={onNextSlide}>
        <IconItem icon={icons.right} size={size} />
      </button>
    </div>
  )
}
