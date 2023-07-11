import React from 'react'
import { classMUI } from '../../../../constants/stories.constants'
import style from './FilterContainerMenu.module.scss'
import { IFilterContainerMenu } from './FilterContainerMenu.interface'

const FilterContainerMenu: React.FC<IFilterContainerMenu> = () => {
  return (
    <div className={style[`${classMUI}-filter-container`]}>
      <p>Menu</p>
    </div>
  )
}

export default FilterContainerMenu
