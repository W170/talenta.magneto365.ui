import React from 'react'
import { EmptyResult as EmptyResultImage } from '@constants/images.constants'
import { SearchItem } from '@components/UI/atoms'
import { classMUI } from '@constants/stories'
import style from './EmptyResults.module.scss'
import { IEmptyResutls } from './EmptyResults.interface'

const EmptyResult: React.FC<IEmptyResutls> = ({
  titleNoResutls,
  noResultsDescription,
  noResultsDescriptionTwo,
  filteredOptions
}) => {
  return (
    <main className={style[`${classMUI}-empty-result`]}>
      <span className={style[`${classMUI}-empty-result__img-container`]}>
        <img
          className={style[`${classMUI}-empty-result__img-container--img`]}
          src={EmptyResultImage}
          alt="empty-result"
        />
      </span>
      <div className={style[`${classMUI}-empty-result__info`]}>
        <div>
          <h2>{titleNoResutls}</h2>
          <p>{noResultsDescription}</p>
          <p>{noResultsDescriptionTwo}</p>
        </div>
        <div className={style[`${classMUI}-empty-result__tags`]}>
          {filteredOptions.map(({ tag, url }, index: number) => (
            <SearchItem key={index + tag} tag={tag} url={url} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default EmptyResult
