import React, { useState } from 'react'
import style from './MetadataCardImage.module.scss'
import { classMUI } from '@constants/stories'
import { IMetadataCardImage } from './MetadataCardImage.interface'
import { ByAuthor } from '@components/UI/organism/DescriptionBook/children/ByAuthor'
import { BookType } from './children/BookType'
import { ButtonCard } from '../ButtonCard'
import { Popover } from '@components/UI/atoms'
import { ListMenuText } from '../ListMenuText'

const Component: React.FC<IMetadataCardImage> = ({ title, byText, authors, mediaType, buttonsFooter }) => {
  const [clickOut, setClickOut] = useState(false)
  return (
    <div className={style[`${classMUI}-metadata-card-image`]}>
      <button className={style[`${classMUI}-metadata-card-image__submenu`]}>
        <Popover
          widthBase={5}
          show={clickOut}
          content={
            <ListMenuText
              title={'hola'}
              links={[
                {
                  href: '',
                  tag: 'Hola'
                }
              ]}
            />
          }
          positionX="left"
          positionY="bottom"
        >
          <span
            className={style[`${classMUI}-metadata-card-image__submenu--icon`]}
            onClick={() => setClickOut(!clickOut)}
          >
            ...
          </span>
        </Popover>
      </button>
      <h6 className={style[`${classMUI}-metadata-card-image__title`]}> {title}</h6>
      <ByAuthor byText={byText} authors={authors} />
      {mediaType ? <BookType mediaType={mediaType} /> : null}
      <ButtonCard className={style[`${classMUI}-metadata-card-image__footer`]} config={buttonsFooter} />
    </div>
  )
}

/**
 * Molecule UI component for Metadata Card Image
 */

export const MetadataCardImage = Component
