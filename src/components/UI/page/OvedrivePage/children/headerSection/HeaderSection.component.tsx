import React from 'react'
import style from './HeaderSection.module.scss'
import { classMUI } from '@constants/stories'
import { IHeaderSection } from './HeaderSection.interface'

const HeaderSection: React.FC<IHeaderSection> = ({ firstSection, secondSection }) => {
  return (
    <div className={style[`${classMUI}-header-section`]}>
      <div className={style[`${classMUI}-header-section__first`]}>
        {firstSection.map(({ component: NewComponent, props }, index) => (
          <NewComponent key={index} {...props} />
        ))}
      </div>
      <div className={style[`${classMUI}-header-section__second`]}>
        {secondSection.map(({ component: NewComponent, props }, index) => (
          <NewComponent key={index} {...props} />
        ))}
      </div>
    </div>
  )
}

export default HeaderSection
