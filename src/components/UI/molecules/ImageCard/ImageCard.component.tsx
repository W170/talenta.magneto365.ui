import React from 'react'
import styles from './ImageCard.module.scss'
import { classNames } from '@shared/utils/common'
import { ICardImage } from './ImageCard.interface'
import { IconItem } from '@components/UI/atoms'
import { ArrowRightWhite } from '@constants/icons.constants'
import { imageCardPrefix } from '@constants/stories/carousel.constants'

const cx = classNames.bind(styles)

const Component: React.FC<ICardImage> = ({
  className,
  imagePath,
  alt = 'Image',
  title,
  description,
  dimensions = { height: '250px', width: '500px' },
  icon = { showIcon: true, size: 14 }
}) => {
  return (
    <div className={cx(imageCardPrefix, className)} style={dimensions}>
      <img className={styles[`${imageCardPrefix}__image`]} src={imagePath} alt={alt} loading="lazy" />
      <div className={styles[`${imageCardPrefix}__overlay`]}>
        <p className={styles[`${imageCardPrefix}__title`]}>{title}</p>
        <div className={styles[`${imageCardPrefix}__description`]}>
          {description && <p className={styles[`${imageCardPrefix}__description_text`]}>{description}</p>}
          {icon.showIcon && (
            <IconItem icon={ArrowRightWhite} className={styles[`${imageCardPrefix}__description_icon`]} {...icon} />
          )}
        </div>
      </div>
    </div>
  )
}

export const ImageCard = Component
