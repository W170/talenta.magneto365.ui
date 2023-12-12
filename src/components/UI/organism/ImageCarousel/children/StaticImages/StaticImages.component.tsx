import React, { useMemo } from 'react'
import style from './StaticImages.module.scss'
import { classMUI } from '@constants/stories'
import { ICarouselLibrary } from '../CarouselLibrary'

const Component: React.FC<ICarouselLibrary> = ({ values }) => {
  const newValues = useMemo(() => values.slice(0, 4), [values])

  return (
    <div className={style[`${classMUI}-static-images`]}>
      {newValues.length
        ? newValues.map(({ id, cover, title }) => (
            <div key={id} className={style[`${classMUI}-static-images__value`]}>
              <img src={cover} alt={title} />
            </div>
          ))
        : []}
    </div>
  )
}

/**
 * Molecule UI component for Static Images
 */

export const StaticImages = Component
