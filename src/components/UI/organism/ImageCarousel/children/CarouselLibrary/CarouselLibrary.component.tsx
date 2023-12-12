import React, { useMemo } from 'react'
import { ICarouselLibrary } from './CarouselLibrary.interface'
import style from './CarouselLibrary.module.scss'
import { classMUI } from '@constants/stories'
import { Carousel } from '@components/UI/atoms'
import { ECandidateState } from '../../ImageCarousel.interface'
import { useMediaQuery, useResizeElement } from '@components/hooks'

const Component: React.FC<ICarouselLibrary> = ({ values, candidateState }) => {
  const newClassName = useMemo(() => {
    const classOriginal = style[`${classMUI}-carousel-library`]
    const notValues = style[`${classMUI}-not-values`]
    if (!values?.length) {
      return `${classOriginal} ${notValues}`
    }
    return classOriginal
  }, [values])

  const isMobile = useMediaQuery(false, {
    xxs: true,
    xs: true,
    sm: true,
    md: true
  })

  const numberViewCards = useResizeElement('#carousel-images')
  const showElements = useMemo(() => {
    if (isMobile) return 8
    if (numberViewCards > 900) {
      return 8
    } else if (numberViewCards <= 900 && numberViewCards > 700) {
      return 6
    } else if (numberViewCards <= 700 && numberViewCards > 600) {
      return 5
    } else if (numberViewCards <= 600 && numberViewCards > 500) {
      return 4
    }
    return 3
  }, [isMobile, numberViewCards])

  const displayValues = useMemo(
    () =>
      values.length
        ? values.map(({ id, cover, title, href }) => {
            const item = <img src={cover} alt={title} />
            if (candidateState === ECandidateState.FINISHED) {
              return (
                <a
                  key={id}
                  className={style[`${classMUI}-carousel-library__values`]}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item}
                </a>
              )
            } else {
              return <div className={style[`${classMUI}-carousel-library__values`]}>{item}</div>
            }
          })
        : [],
    [candidateState, values]
  )

  return (
    <Carousel className={newClassName} showElements={showElements}>
      {displayValues}
    </Carousel>
  )
}

/**
 * Molecule UI component for Carousel Library
 */

export const CarouselLibrary = Component
