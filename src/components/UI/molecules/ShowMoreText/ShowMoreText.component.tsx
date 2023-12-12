import { useMediaQuery } from '@components/hooks'
import { ArrowDown2, ArrowUp } from '@constants/icons.constants'
import { classMUI } from '@constants/stories'
import React, { useMemo, useState } from 'react'
import { IShowMoreText } from './ShowMoreText.interface'
import style from './ShowMoreText.module.scss'

const Component: React.FC<IShowMoreText> = ({ text }) => {
  const [showMore, setShowMore] = useState(false)
  const showClassName = useMemo(() => (showMore ? style[`${classMUI}-show`] : ''), [showMore])

  const percentage = useMediaQuery(0.69, {
    lg: 0.6,
    md: 0.4,
    sm: 0.572
  })

  const showDefaultChart = useMemo(() => text.length * percentage, [percentage, text.length])

  return (
    <div className={style[`${classMUI}-show-more-text`]}>
      <p
        className={style[`${classMUI}-show-more-text__text`]}
        dangerouslySetInnerHTML={{ __html: showMore ? text : `${text?.slice(0, showDefaultChart)}` }}
      />
      <div className={`${style[`${classMUI}-show-more-text__button`]} ${showClassName}`}>
        <button onClick={() => setShowMore(!showMore)}>
          <img src={showMore ? ArrowUp : ArrowDown2} alt={`arrow circle ${showMore ? 'up' : 'down'}}`} />
        </button>
      </div>
    </div>
  )
}

export const ShowMoreText = Component
