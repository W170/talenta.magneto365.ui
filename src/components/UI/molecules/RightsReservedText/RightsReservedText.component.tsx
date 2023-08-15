import React from 'react'
import { classMUI } from '@constants/stories.constants'
import style from './RightsReservedText.module.scss'

const RightsReservedText = () => {
  return (
    <div className={`${style[`${classMUI}-rights-reserved`]}`}>
      <p>Magneto Global S.A.S, todos los derechos reservados |</p>
      <a className={`${style[`${classMUI}-rights-reserved__link`]}`} href="#">
        Mapa del sitio
      </a>
    </div>
  )
}

export default RightsReservedText
