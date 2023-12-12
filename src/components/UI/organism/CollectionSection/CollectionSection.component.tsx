import React, { useEffect, useState } from 'react'
import style from './CollectionSection.module.scss'
import { classMUI } from '@constants/stories'
import { ICollectionSection } from './CollectionSection.interface'
import { CardImage, ICardImage } from '@components/UI/molecules/CardImage'
import { ArrowRight2 } from '@constants/icons.constants'

const CollectionSection: React.FC<ICollectionSection> = ({ title, subtitle, textButton, isFeatured, values }) => {
  const [currentValues, setCurrentValues] = useState<ICardImage[]>([])

  useEffect(() => {
    setCurrentValues(() => values.slice(0, 6))
  }, [values])
  return (
    <section className={`${style[`${classMUI}-collection-section`]}`}>
      <div className={style[`${classMUI}-collection-section__content`]}>
        <h4 className={style[`${classMUI}-collection-section__title`]}>{title}</h4>
        {isFeatured ? <h6 className={style[`${classMUI}-collection-section__subtitle`]}>{subtitle}</h6> : null}
        <div className={style[`${classMUI}-collection-section__options`]}>
          {currentValues?.map(({ id, ...restProps }) => (
            <CardImage key={id} id={id} {...restProps} />
          ))}
        </div>
        <div className={style[`${classMUI}-collection-section__all-books`]}>
          <div className={style[`${classMUI}-collection-section__all-books--content`]}>
            <a>{textButton}</a>
            <img src={ArrowRight2} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CollectionSection
