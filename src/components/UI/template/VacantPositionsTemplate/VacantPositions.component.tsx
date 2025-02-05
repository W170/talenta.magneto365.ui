import React from 'react'
import { IVacantPositions } from './VacantPositions.interface'
import { AlphabetFilter } from '@components/UI/organism'
import style from './VacantPositions.module.scss'
import { ButtonLink } from '@components/UI/atoms'
import { ArrowLeft2, ArrowRightWhite } from '@constants/icons.constants'

const Muiclass = 'magneto-ui'

const VacantPositions: React.FC<IVacantPositions> = ({
  title,
  subtitle,
  banner,
  filterProps,
  showBackButton,
  viewMoreProps,
  children
}) => {
  return (
    <section className={style[`${Muiclass}-vacant-positions-layout`]}>
      <div className={style[`${Muiclass}-vacant-positions-layout-top-container`]}>
        {banner && banner}
        {filterProps && <AlphabetFilter {...filterProps} />}
        {showBackButton && (
          <ButtonLink
            buttonText="Volver"
            suffixIcon={ArrowLeft2}
            onClick={() => console.log()}
            className={style[`${Muiclass}-vacant-positions-layout-top-container__back-button`]}
            iconSize={16}
          />
        )}
        {(title || subtitle) && (
          <div className={style[`${Muiclass}-vacant-positions-layout-top-container--description`]}>
            {title && <h2>{title}</h2>}
            {subtitle && <h3>{subtitle}</h3>}
          </div>
        )}
      </div>
      {children}
      {viewMoreProps && (
        <div className={style[`${Muiclass}-vacant-positions-layout-view-more-container`]}>
          <ButtonLink
            className={style[`${Muiclass}-vacant-positions-layout-view-more-container__button`]}
            prefixIcon={ArrowRightWhite}
            iconSize={18}
            {...viewMoreProps}
          />
        </div>
      )}
    </section>
  )
}

export default VacantPositions
