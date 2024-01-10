import React from 'react'
import { IOvedrivePage } from './OvedrivePage.interface'
import HeaderSection from './children/headerSection/HeaderSection.component'
import style from './OvedrivePage.module.scss'
import { classMUI } from '@constants/stories'
import CollectionSection from '@components/UI/organism/CollectionSection/CollectionSection.component'

const JobsPage: React.FC<IOvedrivePage> = ({ header, collectionSection }) => {
  return (
    <div className={style[`${classMUI}-overdrive-page`]}>
      <HeaderSection {...header} />
      <div className={style[`${classMUI}-overdrive-page__content`]}>
        {collectionSection.length
          ? collectionSection.map((item, index) => <CollectionSection key={index} {...item} />)
          : null}
      </div>
    </div>
  )
}

export default JobsPage
