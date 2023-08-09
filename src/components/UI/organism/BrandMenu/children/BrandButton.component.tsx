import React, { useMemo } from 'react'
import { IconItem } from '../../../atoms'
import { ArrowDown2 } from '../../../../../constants/icons.constants'
import style from './BrandButton.module.scss'
import { IBrandButton } from './BrandButton.interface'

const Muiclass = 'magneto-ui'

const BrandButton: React.FC<IBrandButton> = ({ rotate, companyLogo, companySlug, onClick }) => {
  const rotateIcon = useMemo(() => {
    return rotate ? style['rotate'] : ''
  }, [rotate])
  return (
    <div className={style[`${Muiclass}-brand-button`]}>
      <button className={style[`${Muiclass}-brand-button__company-logo`]} onClick={onClick}>
        <img className={style[`${Muiclass}-brand-button__company-logo--img`]} src={companyLogo} alt={companySlug} />
        <span className={`${style[`${Muiclass}-brand-button__icon`]} ${rotateIcon}`}>
          <IconItem Icon={ArrowDown2} />
        </span>
      </button>
    </div>
  )
}

export default BrandButton
