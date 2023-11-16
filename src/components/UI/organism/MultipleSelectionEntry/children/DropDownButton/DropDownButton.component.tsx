import React from 'react'
import { IconItem } from '@components/UI/atoms'
import { ArrowDown2 } from '@constants/icons.constants'
import { IDropDownButton } from './DropDownButton.interface'
import { classMUI } from '@constants/stories'
import style from './DropDownButton.module.scss'

const DropDownButton: React.FC<IDropDownButton> = ({ onClick, title }) => {
  return (
    <button className={`${style[`${classMUI}-drop-down-button`]}`} type="button" onClick={onClick}>
      {title}
      <IconItem icon={ArrowDown2} alt="arrow-icon" />
    </button>
  )
}

export default DropDownButton
