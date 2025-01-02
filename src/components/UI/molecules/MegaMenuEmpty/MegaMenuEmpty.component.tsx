import { NoData } from '@constants/gifs.constants'
import React from 'react'
import style from './MegaMenuEmpty.module.scss'
import { IMegaMenuEmpty } from './MegaMenuEmpty.interface'

const MegaMenuEmpty: React.FC<IMegaMenuEmpty> = ({ title, subtitle }) => {
  return (
    <div className={style['mega-menu-empty']}>
      <h4 className={style['mega-menu-empty__title']}>{title}</h4>
      <p className={style['mega-menu-empty__subtitle']}>{subtitle}</p>
      <img className={style['mega-menu-empty__image']} src={NoData} height={170} />
    </div>
  )
}

export default MegaMenuEmpty
