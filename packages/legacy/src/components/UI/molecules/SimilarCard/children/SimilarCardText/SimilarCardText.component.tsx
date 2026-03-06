import React, { Fragment } from 'react'
import { ISimilarCard } from '../../SimilarCard.interface'
import styles from '../../SimilarCard.module.scss'
import { classNames } from '@shared/utils/common'
const cx = classNames.bind(styles)

const Component: React.FC<ISimilarCard.Text> = ({ customText, className, headingType }) => {
  if (!customText?.length) return null

  return (
    <p className={cx(styles['similar-card__text'], className)}>
      {customText.map(({ value, fontWeight, lineBreak = false }, index) => {
        const isFirst = index === 0
        const Tag = isFirst && headingType ? headingType : 'span'

        return (
          <Fragment key={`custom-text-${index}`}>
            <Tag className={styles[`similar-card__text--${fontWeight}`]}>{value}</Tag>
            {lineBreak && <br />}
          </Fragment>
        )
      })}
    </p>
  )
}

export const SimilarCardText = Component
