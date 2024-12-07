import React from 'react'
import { ISimilarCard } from '../../SimilarCard.interface'
import styles from './SimilarCardLogo.module.scss'
import { classNames } from '@shared/utils/common'
import { NoLogo } from '@constants/icons.constants'

const cx = classNames.bind(styles)

const Component: React.FC<ISimilarCard.Logo> = ({ className, src, alt, hideLogo = false }) => {
  if (hideLogo) return null
  return (
    <img
      className={cx(`similar-card-logo`, className)}
      src={src || NoLogo}
      alt={alt?.toLowerCase() || 'company-logo'}
    />
  )
}

export const SimilarCardLogo = Component
