import React from 'react'
import { IconItem } from '../Icon'
import { ITag } from './Tag.interface'
import { classMUI } from '@constants/stories'
import style from './Tag.module.scss'

const Tags: React.FC<ITag> = ({ text, onClick, icon, bgColor = '#F4F4FA', textColor = 'black' }) => {
  return (
    <button
      className={style[`${classMUI}-tag`]}
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {text}
      <IconItem icon={icon} alt="tag-icon" />
    </button>
  )
}

export default Tags
