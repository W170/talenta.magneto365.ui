import React, { Fragment, useMemo } from 'react'
import { classMUI } from '@constants/stories'
import style from './Text.module.scss'
import { IText } from './Text.interface'

const Text: React.FC<IText> = ({ text, customText, className }) => {
  const textRender = useMemo(() => {
    return customText?.length ? (
      <span className={className}>
        {customText.map(({ value, fontWeight, lineBreak = false }, index) => (
          <Fragment key={`${value}-${index}`}>
            <span className={style[`${classMUI}-${fontWeight}`]}>{value}</span>
            {lineBreak && <br />}
          </Fragment>
        ))}
      </span>
    ) : (
      <p className={className}>{text}</p>
    )
  }, [text, customText, className])

  return <>{textRender}</>
}

export default Text
