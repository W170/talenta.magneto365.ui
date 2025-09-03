import React from 'react'
import style from './MegaMenuEmpty.module.scss'
import { IMegaMenuEmpty } from './MegaMenuEmpty.interface'
import { staticMessages } from '@constants/stories'

const MegaMenuEmpty: React.FC<IMegaMenuEmpty> = ({
  title,
  subtitle,
  customStyle,
  imageData = 'noData',
  imageHeight = 170
}) => {
  return (
    <div className={style['mega-menu-empty']} style={customStyle?.content}>
      <h4 className={style['mega-menu-empty__title']} style={customStyle?.title}>
        {title}
      </h4>
      <p className={style['mega-menu-empty__subtitle']} style={customStyle?.subtitle}>
        {subtitle}
      </p>
      <img
        className={style['mega-menu-empty__image']}
        src={staticMessages[imageData]}
        height={imageHeight}
        style={customStyle?.image}
      />
    </div>
  )
}

export default MegaMenuEmpty
