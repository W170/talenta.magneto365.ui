import React from 'react'
import { IconItem } from '../../atoms'
import { Close } from '../../../../constants/icons.constants'
import style from './BrandsContainer.module.scss'
import { IBrands, IBrandsContainer } from './BrandsContainer.interface'

const Muiclass = 'magneto-ui'

const BrandsContainer: React.FC<IBrandsContainer> = ({ brands, closeBrands, ourBrandsText }) => {
  return (
    <div className={style[`${Muiclass}-brands`]}>
      <div className={style[`${Muiclass}-brands__header`]}>
        <div className={style[`${Muiclass}-brands__header--row`]}>
          <p>{ourBrandsText}</p>
          <button onClick={closeBrands} type="button">
            <IconItem size={15} icon={Close} />
          </button>
        </div>
      </div>

      <div className={style[`${Muiclass}-brands-container`]}>
        <div className={style[`${Muiclass}-brands-container__brands`]}>
          {brands?.map(({ brandAlt, brandImg, brandTitle, brandUrl }: IBrands, index) => (
            <a href={brandUrl} className={style[`${Muiclass}-brands-container__brands--brand`]} key={index}>
              <img src={brandImg} alt={brandAlt} />
              <p>{brandTitle}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BrandsContainer
