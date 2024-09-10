import React from 'react'
import { ArrowRight2 } from '@constants/icons.constants'
import { IconItem } from '../Icon'
import { Image } from '../Image'
import { IMegaMenuCard } from './MegaMenuCard.interface'
import styles from './MegaMenuCard.module.scss'

const MegaMenuCard: React.FC<IMegaMenuCard> = ({ title, logo, icon, quotas, onClick, className, showRigthArrow }) => {
  return (
    <div className={`${styles[`magneto-ui-mega-menu-card`]} ${className ? className : ''}`} onClick={onClick}>
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
        <div className={styles[`magneto-ui-mega-menu-card__quotas`]}>{`${quotas} cupos`}</div>
      </div>
      {showRigthArrow && (
        <div className={styles[`magneto-ui-mega-menu-card__arrow`]}>
          <IconItem icon={ArrowRight2} size={16} />
        </div>
      )}
    </div>
  )
}

export default MegaMenuCard
