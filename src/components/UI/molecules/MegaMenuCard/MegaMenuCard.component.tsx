import React, { useCallback } from 'react'
import { ArrowRight2 } from '@constants/icons.constants'
import { IconItem } from '../../atoms/Icon'
import { Image } from '../../atoms/Image'
import { IMegaMenuCard } from './MegaMenuCard.interface'
import styles from './MegaMenuCard.module.scss'
import { useMediaQuery } from '@components/hooks'
import { numberToCurrency } from '@utils/currency/currency.util'

const MegaMenuCard: React.FC<IMegaMenuCard> = ({
  title,
  logo,
  icon,
  quotas,
  onClick,
  className,
  showRigthArrow,
  href,
  target
}) => {
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (onClick != null) {
        event.preventDefault()
        onClick()
      }
    },
    [onClick]
  )

  const rigthArrow = (
    <div className={styles[`magneto-ui-mega-menu-card__arrow`]}>
      <IconItem icon={ArrowRight2} size={16} />
    </div>
  )

  const arrow = useMediaQuery(showRigthArrow && rigthArrow, {
    md: rigthArrow
  })

  return (
    <a
      className={`${styles[`magneto-ui-mega-menu-card`]} ${className ? className : ''}`}
      onClick={handleClick}
      href={href}
      target={target}
    >
      {icon && (
        <div className={styles[`magneto-ui-mega-menu-card__icon`]}>
          <IconItem icon={icon} size={16} />
        </div>
      )}
      {logo && (
        <div className={styles[`magneto-ui-mega-menu-card__logo`]}>
          <Image image={logo} alt={'logo'} className={styles[`magneto-ui-mega-menu-card__logo`]} />
        </div>
      )}
      <div className={styles[`magneto-ui-mega-menu-card__content`]}>
        <div className={styles[`magneto-ui-mega-menu-card__title`]}>{title}</div>
        <div className={styles[`magneto-ui-mega-menu-card__quotas`]}>{`${numberToCurrency(quotas)} cupos`}</div>
      </div>
      {arrow}
    </a>
  )
}

export default MegaMenuCard
