import React from 'react'
import { classMUI } from '@constants/stories.constants'
import style from './ListMenuText.module.scss'
import { IListMenuText } from './ListMenuText.interface'

const ListMenuText: React.FC<IListMenuText> = ({ title, links }) => {
  return (
    <div className={`${style[`${classMUI}-list-menu`]}`}>
      <p className={`${style[`${classMUI}-list-menu__title`]}`}>{title}</p>
      {links.map(({ tag, routePath }, i) => (
        <a className={`${style[`${classMUI}-list-menu__link`]}`} key={i} href={routePath}>
          {tag}
        </a>
      ))}
    </div>
  )
}

export default ListMenuText
