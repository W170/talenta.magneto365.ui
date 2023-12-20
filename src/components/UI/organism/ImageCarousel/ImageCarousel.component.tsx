import { classMUI } from '@constants/stories'
import React, { useMemo } from 'react'
import style from './ImageCarousel.module.scss'
import { ECandidateState, IImageCarousel } from './ImageCarousel.interface'
import { CarouselLibrary } from './children/CarouselLibrary'
import { useMediaQuery } from '@components/hooks'
import { TitleCarousel } from './children/TitleCarousel'

const ImageCarousel: React.FC<IImageCarousel> = ({ title, titleFinished, values, candidateState, ...otherProps }) => {
  const isFinishedStatus = useMemo(() => candidateState === ECandidateState.FINISHED, [candidateState])
  const DesktopOrMobileCarousel = useMediaQuery(<CarouselLibrary values={values} candidateState={candidateState} />, {
    sm: isFinishedStatus ? <CarouselLibrary values={values} candidateState={candidateState} /> : null
  })

  return (
    <section className={style[`${classMUI}-image-carousel`]}>
      <TitleCarousel title={title} titleFinished={titleFinished} isFinishedStatus={isFinishedStatus} {...otherProps} />
      {DesktopOrMobileCarousel}
    </section>
  )
}

export default ImageCarousel
