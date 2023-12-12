import React, { useMemo } from 'react'
import style from './Details.module.scss'
import { classMUI } from '@constants/stories'
import { IDetails } from './Details.interface'

const Component: React.FC<IDetails> = ({
  publisher,
  edition,
  formats,
  publisherText,
  editionText,
  fileSizeText,
  releaseDateText,
  numberPartsText,
  durationText,
  mediaType: mType,
  configDetails
}) => {
  const configType = useMemo(
    () =>
      configDetails(publisher, edition, formats).find(
        ({ mediaType }) => mediaType.toLowerCase() === mType.toLowerCase()
      ),
    [configDetails, edition, formats, mType, publisher]
  )

  return (
    <div className={style[`${classMUI}-details`]}>
      {configType?.mediaType ? (
        <div className={style[`${classMUI}-details__content`]}>
          <div className={`${style[`${classMUI}-details__item`]} ${style[`${classMUI}-details__publisher`]}`}>
            <span className={style[`${classMUI}-details__publisher--info`]}>
              <b>{publisherText}: </b>
              <a>{publisher}</a>
            </span>
            {configType?.edition ? (
              <span className={style[`${classMUI}-details__publisher--info`]}>
                <b>{editionText}: </b>
                <a>{configType.edition}</a>
              </span>
            ) : null}
          </div>
          {configType.formats?.length
            ? configType.formats.map(({ fileSize, onSaleDate, duration, partCount, identifiers }, index) => (
                <div
                  key={index}
                  className={`${style[`${classMUI}-details__item`]} ${style[`${classMUI}-details__formats`]}`}
                >
                  <span className={style[`${classMUI}-details__formats--info`]}>
                    <b>{identifiers?.type}: </b>
                    <span>{identifiers?.value}</span>
                  </span>
                  <span className={style[`${classMUI}-details__formats--info`]}>
                    <b>{fileSizeText}: </b>
                    {fileSize} KB
                  </span>
                  <span className={style[`${classMUI}-details__formats--info`]}>
                    <b>{releaseDateText}: </b>
                    {onSaleDate}
                  </span>
                  {duration ? (
                    <span className={style[`${classMUI}-details__formats--info`]}>
                      <b>{durationText}: </b>
                      {duration}
                    </span>
                  ) : null}
                  {partCount ? (
                    <span className={style[`${classMUI}-details__formats--info`]}>
                      <b>{numberPartsText}: </b>
                      {partCount}
                    </span>
                  ) : null}
                </div>
              ))
            : null}
        </div>
      ) : null}
    </div>
  )
}

/**
 * UI Atom component of By Details
 */

export const Details = Component
