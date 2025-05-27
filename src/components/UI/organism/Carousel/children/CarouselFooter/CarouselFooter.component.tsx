import React from 'react'
import styles from '../../Carousel.module.scss'
import { classNames } from '@shared/utils/common'
import { carouselPrefix } from '@constants/stories'
import { ICarousel } from '../../Carousel.interface'

const cx = classNames.bind(styles)

export const CarouselFooter: React.FC<ICarousel.Footer> = ({ children, className }) => {
  return <div className={cx(`${carouselPrefix}__footer`, className)}>{children}</div>
}
