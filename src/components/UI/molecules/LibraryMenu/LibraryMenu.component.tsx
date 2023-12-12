import { classMUI } from '@constants/stories'
import React, { useEffect, useState } from 'react'
import style from './LibraryMenu.module.scss'
import { ILibraryMenu } from './LibraryMenu.interface'
import { IImageValues } from '@components/UI/organism/ImageCarousel/children/CarouselLibrary'

const Component: React.FC<ILibraryMenu> = ({ title, values, urlRedirect }) => {
  const [currentValues, setCurrentValues] = useState<IImageValues[]>([])

  useEffect(() => {
    if (!values.length) return
    const newValues = values.slice(0, 4)
    setCurrentValues(newValues)
  }, [values])

  return (
    <a className={style[`${classMUI}-library-menu`]} href={urlRedirect}>
      <h6 className={style[`${classMUI}-library-menu__title`]}>{title}</h6>
      <div className={style[`${classMUI}-library-menu__content`]}>
        {currentValues.length
          ? currentValues.map(({ cover, id, title }) => <img key={id} src={cover} alt={title} />)
          : null}
      </div>
    </a>
  )
}

export const LibraryMenu = Component
