import React from 'react'
import { ButtonLink, IButtonLink } from '@components/UI/atoms'
import { ArrowRight2 } from '@constants/icons.constants'
import style from './PositionLink.module.scss'

const PositionLink: React.FC<IButtonLink> = ({ buttonText, onClick, href }) => {
  return (
    <ButtonLink
      buttonText={buttonText}
      onClick={onClick}
      href={href}
      prefixIcon={ArrowRight2}
      className={style['magneto-ui-position-link']}
    />
  )
}

export default PositionLink
