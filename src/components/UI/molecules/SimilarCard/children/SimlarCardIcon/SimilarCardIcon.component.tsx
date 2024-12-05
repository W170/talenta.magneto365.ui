import React from 'react'
import { ISimilarCard } from '../../SimilarCard.interface'
import styles from '../../SimilarCard.module.scss'
import { classNames } from '@shared/utils/common'
import { ArrowRight2 } from '@constants/icons.constants'
import { IconItem } from '@components/UI/atoms'

const cx = classNames.bind(styles)

const Component: React.FC<ISimilarCard.Icon> = ({ className, src, alt, showIconMobile = false }) => {
  return (
    <>
      <IconItem
        className={cx('similar-card__arrow', { 'similar-card__arrow-mobile': !showIconMobile }, className)}
        icon={src || ArrowRight2}
        alt={alt?.toLowerCase() || 'card-icon'}
      />
    </>
  )
}

export const SimilarCardIcon = Component
