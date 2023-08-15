import React from 'react'
import { LogoComponent } from '@components/UI/atoms'
import { LogoMagneto, MinTrabajo } from '@constants/icons.constants'
import { classMUI } from '@constants/stories.constants'
import { MagnetoSocialMedia } from '@components/UI/organism'
import { ListMenuText, RightsReservedText } from '@components/UI/molecules'
import style from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={`${style[`${classMUI}-footer`]}`}>
      <div className={`${style[`${classMUI}-footer__row1`]}`}>
        <div className={`${style[`${classMUI}-footer__row1--column1`]}`}>
          <LogoComponent alt="magneto logo" logo={LogoMagneto} />
          <MagnetoSocialMedia />
          <RightsReservedText />
        </div>
        <div className={`${style[`${classMUI}-footer__row1--column2`]}`}>
          <ListMenuText />
          <ListMenuText />
          <ListMenuText />
        </div>
      </div>
      <div className={`${style[`${classMUI}-footer__row2`]}`}>
        <img className={`${style[`${classMUI}-footer__row2--img`]}`} src={MinTrabajo} alt="min-trabajo-img" />
        <p className={`${style[`${classMUI}-footer__row2--text`]}`}>
          Vinculado a la red de prestadores del Servicio Público de Empleo. Autorizado por la Unidad Administrativa
          Especial del Servicio Público de Empleo según resolución No. 0333/2022
        </p>
      </div>
    </footer>
  )
}

export default Footer
