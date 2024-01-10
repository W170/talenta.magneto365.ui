import React, { useMemo } from 'react'
import { ITitleCarousel } from './TitleCarousel.interface'
import style from './TitleCarousel.modules.scss'
import { classMUI } from '@constants/stories'
import { IsoLogoMagneto, LogoOvedrive } from '@constants/icons.constants'
import { useMediaQuery } from '@components/hooks'

const Component: React.FC<ITitleCarousel> = ({ title, titleFinished, isFinishedStatus, buttonAction, isTesting }) => {
  const ButtonActionDisplay = useMemo(() => (!isTesting ? buttonAction : null), [buttonAction, isTesting])
  const StateButton = useMediaQuery(ButtonActionDisplay, {
    sm: (
      <React.Fragment>
        {isFinishedStatus ? (
          ButtonActionDisplay
        ) : (
          <div className={style[`${classMUI}-title-carousel__icons`]}>
            <img src={IsoLogoMagneto} alt={'logo iso magneto'} />
            <img src={LogoOvedrive} alt={'logo iso overdrive'} />
          </div>
        )}
      </React.Fragment>
    )
  })
  return (
    <header className={style[`${classMUI}-title-carousel`]}>
      <h6 className={style[`${classMUI}-title-carousel__title`]}>{isFinishedStatus ? titleFinished : title}</h6>
      {StateButton}
    </header>
  )
}

export const TitleCarousel = Component
