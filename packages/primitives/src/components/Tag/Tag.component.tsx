import React from 'react'
import { classNames } from '@magneto365-ui/shared'
import { IconItem } from '../Icon'
import { ITag } from './Tag.interface'
import styles from './Tag.module.scss'

const cn = classNames.bind(styles)

const Tags: React.FC<ITag> = ({ text, onClick, icon, bgColor = '#F4F4FA', textColor = 'black' }) => {
  return (
    <button
      className={cn('magneto-ui-tag')}
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
      type="button"
    >
      {text}
      <IconItem icon={icon} alt="tag-icon" />
    </button>
  )
}

export const Tag = Tags
