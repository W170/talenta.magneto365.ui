import { Rate } from '@components/UI/atoms/Rate'
import { Tabs } from '@components/UI/atoms/Tabs'
import { ShowMoreText } from '@components/UI/molecules'
import { ButtonCard } from '@components/UI/molecules/ButtonCard/ButtonCard.component'
import { BookType } from '@components/UI/molecules/MetadataCardImage/children/BookType'
import { Details } from '@components/UI/molecules/MetadataCardImage/children/Details'
import { useMediaQuery } from '@components/hooks'
import { CopySuccess } from '@constants/icons.constants'
import { classMUI } from '@constants/stories'
import { configDetails } from '@constants/stories/descriptionBook.constants'
import React, { useMemo, useState } from 'react'
import { IDescriptionBook } from './DescriptionBook.interface'
import style from './DescriptionBook.module.scss'
import { ByAuthor } from './children/ByAuthor'
import { FormatsColumn } from './children/FormatsColumn'

const DescriptionBook: React.FC<IDescriptionBook> = (props) => {
  const {
    title,
    cover,
    authors,
    copiesAvailableText,
    configLinkButtons,
    configBorrowReadButtons,
    formats,
    mediaType,
    byText,
    score,
    optionsTabs,
    fullDescription,
    formatsColumn,
    getTotalStarRating
  } = props
  const [readBook, setReadBook] = useState(false)
  const classNameButtons = `${style[`${classMUI}-description-book__btns`]}`
  const urlIFrame = formats.find(({ samples }) => samples)?.samples

  const newConfigBorrowReadButtons = useMemo(() => {
    const foundReadBtn = configBorrowReadButtons.findIndex(({ className }) => className === 'button-read')
    if (!foundReadBtn) configBorrowReadButtons

    const newConfig = [...configBorrowReadButtons]

    newConfig[foundReadBtn] = {
      ...newConfig[foundReadBtn],
      onClick: () => setReadBook(true)
    }

    return newConfig
  }, [configBorrowReadButtons])

  const ButtonLinks = useMemo(() => {
    return <ButtonCard className={classNameButtons} config={configLinkButtons} />
  }, [classNameButtons, configLinkButtons])

  const ButtonBorrowRead = useMemo(() => {
    return <ButtonCard className={classNameButtons} config={newConfigBorrowReadButtons} />
  }, [classNameButtons, newConfigBorrowReadButtons])

  const contentDescriptionDesktop = useMediaQuery(
    <div className={style[`${classMUI}-description-book__left--tabs`]}>
      <Tabs options={optionsTabs}>
        <ShowMoreText text={fullDescription} />
        <Details {...props} formats={formats} mediaType={mediaType} configDetails={configDetails} />
      </Tabs>
    </div>,
    {
      sm: null
    }
  )

  const contentDescriptionMobile = useMediaQuery(null, {
    sm: (
      <div className={style[`${classMUI}-description-book__left--tabs`]}>
        <ShowMoreText text={fullDescription} />
      </div>
    )
  })

  return (
    <section className={`${style[`${classMUI}-description-book`]}`}>
      <div className={style[`${classMUI}-description-book__content`]}>
        <div className={style[`${classMUI}-description-book__left`]}>
          <div className={style[`${classMUI}-description-book__left--image`]}>
            <img src={cover} />
          </div>
          <div className={style[`${classMUI}-description-book__left--description`]}>
            <div className={style[`${classMUI}-description-book__left--description-title`]}>
              <h6>{title}</h6>
              <p>{title}</p>
              <ByAuthor byText={byText} authors={authors} />
              <BookType mediaType={mediaType} />
            </div>
            <Rate numberRates={5} setScore={getTotalStarRating} score={score} />
            <div className={style[`${classMUI}-description-book__left--description-copy`]}>
              <img src={CopySuccess} alt="copy icon" />
              <span>{copiesAvailableText}</span>
            </div>
            <div className={style[`${classMUI}-description-book__left--description-btns`]}>{ButtonBorrowRead}</div>
            <div className={style[`${classMUI}-description-book__left--description-btns`]}>{ButtonLinks}</div>
            {contentDescriptionDesktop}
          </div>
        </div>
        {contentDescriptionMobile}
        <FormatsColumn {...formatsColumn} />
      </div>
      {readBook ? (
        <div className={style[`${classMUI}-description-book__frame`]}>
          {urlIFrame?.length ? <iframe src={urlIFrame[0].url} /> : null}
        </div>
      ) : null}
    </section>
  )
}

export default DescriptionBook
