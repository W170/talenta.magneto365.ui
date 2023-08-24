import React from 'react'
import { ListIconLink } from '@components/UI/molecules'
import { ListIcon, SocialMediaProps, classMUI } from '@constants/stories.constants'
import { IMagnetoSocialMedia } from './MagnetoSocialMedia.interface'
import style from './MagnetoSocialMedia.module.scss'

const MagnetoSocialMedia: React.FC<IMagnetoSocialMedia> = ({ followText }) => {
  return (
    <div className={`${style[`${classMUI}-magneto-social-media`]}`}>
      <p className={`${style[`${classMUI}-magneto-social-media__follow-text`]}`}>{followText}:</p>
      <ListIconLink spacing={10} size={36} listIcon={ListIcon} />
      <div className={`${style[`${classMUI}-magneto-social-media__app-links-container`]}`}>
        {SocialMediaProps.map(({ alt, href, img }, i) => (
          <a key={i} target="blank" href={href}>
            <img
              className={`${style[`${classMUI}-magneto-social-media__app-links-container--img`]}`}
              src={img}
              alt={alt}
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default MagnetoSocialMedia
