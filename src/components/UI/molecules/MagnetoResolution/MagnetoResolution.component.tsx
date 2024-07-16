import React from 'react'
import { MinTrabajo } from '@constants/icons.constants'
import { classMUI } from '@constants/stories'
import style from './MagnetoResolution.module.scss'
import { IMagnetoResolution } from './MagnetoResolution.interface'

const MagnetoResolution: React.FC<IMagnetoResolution> = ({ resolutionText, resolutionHrefText, resolutionHref }) => {
  return (
    <div className={`${style[`${classMUI}-magneto-resolution`]}`}>
      <img
        className={`${style[`${classMUI}-magneto-resolution__img`]}`}
        src={MinTrabajo}
        alt="min-trabajo-img"
        loading="lazy"
        width="80px"
      />
      <p className={`${style[`${classMUI}-magneto-resolution__text`]}`}>
        {resolutionText}
        <a className={`${style[`${classMUI}-magneto-resolution__text--link`]}`} href={resolutionHref}>
          {resolutionHrefText}
        </a>
      </p>
    </div>
  )
}

export default MagnetoResolution
