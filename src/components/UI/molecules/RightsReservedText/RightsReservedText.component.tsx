import React from 'react'
import { classMUI } from '@constants/stories'
import style from './RightsReservedText.module.scss'
import { IRightsReservedText } from './RightsReservedText.interface'

const RightsReservedText: React.FC<IRightsReservedText> = ({ magnetoRightsText }) => {
  return (
    <div className={`${style[`${classMUI}-rights-reserved`]}`}>
      <p>{magnetoRightsText}</p>
    </div>
  )
}

export default RightsReservedText
