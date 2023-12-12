import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { ICarousel } from './Carousel.interface'
import style from './Carousel.module.scss'
import { LoadingProps, classMUI } from '@constants/stories'
import { Loading } from '@components/UI/atoms'
import { sliceArrays } from '@utils/arrays/array.util'
import { ArrowLeftWhiteLinear, ArrowRightWhiteLinear } from '@constants/icons.constants'

const Component: React.FC<ICarousel> = ({ className, showElements = 5, children }) => {
  const [index, setIndex] = useState(0)
  const [disablePrev, setDisablePrev] = useState(true)
  const [disableNext, setDisableNext] = useState(false)
  const disabledPrevClass = useMemo(() => (disablePrev ? style[`${classMUI}-disabled`] : ''), [disablePrev])
  const disabledNextClass = useMemo(() => (disableNext ? style[`${classMUI}-disabled`] : ''), [disableNext])
  const [currentValues, setCurrentValues] = useState<React.ReactNode[][]>([])

  useEffect(() => {
    if (!children) return
    const newValues = sliceArrays<React.ReactNode>(children, showElements)
    setCurrentValues(newValues)
  }, [children, showElements])

  useEffect(() => {
    if (index === 0) {
      setDisablePrev(true)
    } else {
      setDisablePrev(false)
    }
  }, [index])

  useEffect(() => {
    if (index + 1 > currentValues.length - 1) {
      setDisableNext(true)
    } else {
      setDisableNext(false)
    }
  }, [currentValues, index])

  const onClickPrev = useCallback(() => {
    if (index === 0) return
    setIndex(() => index - 1)
  }, [index])

  const onClickNext = useCallback(() => {
    if (index + 1 > currentValues.length - 1) return
    setIndex(() => index + 1)
  }, [currentValues, index])

  return (
    <div className={className} id={'carousel-images'}>
      {currentValues?.length ? (
        <div className={`${style[`${classMUI}-carousel`]}`}>
          <span className={`${style[`${classMUI}-carousel__btn-prev`]} ${disabledPrevClass}`} onClick={onClickPrev}>
            <img src={ArrowLeftWhiteLinear} />
          </span>
          <div className={style[`${classMUI}-carousel__values`]}>{currentValues[index]}</div>
          <span className={`${style[`${classMUI}-carousel__btn-next`]} ${disabledNextClass}`} onClick={onClickNext}>
            <img src={ArrowRightWhiteLinear} />
          </span>
        </div>
      ) : (
        <Loading {...LoadingProps} />
      )}
    </div>
  )
}

/**
 * Molecule UI component for Carousel
 */

export const Carousel = Component
