import React from 'react'
import { classNames } from '@shared/utils/common'
import { ArrowRight2, Building5 } from '@constants/icons.constants'
import styles from './ActionLinkCard.module.scss'
import { IActionLinkCard } from './ActionLinkCard.interface'
import { IconItem } from '@components/UI/atoms'

const cx = classNames.bind(styles)

const Component: React.FC<IActionLinkCard> = ({ title, name, redirectUrl, className }) => {
  return (
    <section className={cx('action-link-card', className)}>
      <a
        href={redirectUrl}
        className={cx('action-link-card__link')}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={cx('action-link-card__content')}>
          <IconItem icon={Building5} hover={false} size={20} />
          <div className={cx('action-link-card__info')}>
            <span>{title}</span>
            <p>{name}</p>
          </div>
        </div>
        <IconItem icon={ArrowRight2} hover={false} size={20} />
      </a>
    </section>
  )
}

export const ActionLinkCard = Component
