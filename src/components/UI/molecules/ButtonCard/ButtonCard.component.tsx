import React from 'react'
import style from './ButtonCard.module.scss'
import { classMUI } from '@constants/stories'
import { IButtonCard } from './ButtonCard.interface'
import { MainButton } from '@components/UI/atoms'

const Component: React.FC<IButtonCard> = ({ config, className }) => {
  return (
    <div className={`${style[`${classMUI}-button-card`]} ${className}`}>
      {config?.length
        ? config?.map(({ onClick, className: classNameButton, ...props }, index) => (
            <MainButton key={index} onClick={onClick} {...props} className={style[`${classMUI}-${classNameButton}`]} />
          ))
        : null}
    </div>
  )
}

/**
 * Molecule UI component for Button Card
 */

export const ButtonCard = Component
