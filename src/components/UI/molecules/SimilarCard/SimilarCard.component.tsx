import React from 'react'
import { ISimilarCard } from './SimilarCard.interface'
import styles from './SimilarCard.module.scss'
import { classNames } from '@shared/utils/common'
import { SimilarCardLogo } from './children/SimilarCardLogo/SimilarCardLogo.component'
import { SimilarCardIcon } from './children/SimlarCardIcon/SimilarCardIcon.component'
import { SimilarCardText } from './children/SimilarCardText/SimilarCardText.component'
const cx = classNames.bind(styles)

const Component: React.FC<ISimilarCard> = ({ children, title = 'jobLink', jobUrlSlug = '#', className }) => {
  return (
    <a className={cx(`similar-card`, className)} href={jobUrlSlug} title={title}>
      {children}
    </a>
  )
}

export const SimilarCard = Object.assign(Component, {
  Text: SimilarCardText,
  Logo: SimilarCardLogo,
  Icon: SimilarCardIcon
})
