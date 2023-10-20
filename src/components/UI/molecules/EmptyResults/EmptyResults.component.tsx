import React, { useMemo } from 'react'
import { SearchItem } from '@components/UI/atoms'
import { classMUI } from '@constants/stories'
import style from './EmptyResults.module.scss'
import { IEmptyResutls } from './EmptyResults.interface'

const EmptyResult: React.FC<IEmptyResutls> = ({
  titleNoResutls,
  noResultsDescription,
  noResultsDescriptionTwo,
  filteredOptions,
  noResultsImage
}) => {
  const emptyCardTitle = useMemo(() => {
    const regex = /'([^']+)'/
    const match = regex.exec(titleNoResutls)
    const arrayTitle = []

    if (match) {
      arrayTitle.push(titleNoResutls.substring(0, match.index))
      arrayTitle.push(match[0])
      arrayTitle.push(match[1])
    }

    const titleWithSearch = (
      <h2>
        {arrayTitle[0]}
        <span className={style[`${classMUI}-empty-result__info--search`]}>
          {"'"}
          {arrayTitle[2]}
        </span>
        {"'"}
      </h2>
    )

    const titleWithFilter = <h2>{titleNoResutls}</h2>
    return match ? titleWithSearch : titleWithFilter
  }, [titleNoResutls])

  return (
    <main className={style[`${classMUI}-empty-result`]}>
      <span className={style[`${classMUI}-empty-result__img-container`]}>
        <img
          className={style[`${classMUI}-empty-result__img-container--img`]}
          src={noResultsImage}
          alt="empty-result"
        />
      </span>
      <div className={style[`${classMUI}-empty-result__info`]}>
        <div>
          <div className={style[`${classMUI}-empty-result__info--title`]}>{emptyCardTitle}</div>
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
