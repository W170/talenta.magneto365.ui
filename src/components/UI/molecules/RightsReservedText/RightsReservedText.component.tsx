import React from 'react'
import { classMUI } from '@constants/stories.constants'
import style from './RightsReservedText.module.scss'
import { IRightsReservedText } from './RightsReservedText.interface'

const RightsReservedText: React.FC<IRightsReservedText> = ({ magnetoRightsText, mapSiteHref, mapSiteText }) => {
  return (
    <div className={`${style[`${classMUI}-rights-reserved`]}`}>
      <p>{magnetoRightsText}</p>
      <span>|</span>
      <a className={`${style[`${classMUI}-rights-reserved__link`]}`} href={mapSiteHref}>
        {mapSiteText}
      </a>
    </div>
  )
}

export default RightsReservedText
