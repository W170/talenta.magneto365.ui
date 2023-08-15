import React from 'react'
import { ListIconLink } from '@components/UI/molecules'
import { AppGallery, AppStore, GooglePlay } from '@constants/icons.constants'
import { ListIcon, classMUI } from '@constants/stories.constants'
import style from './MagnetoSocialMedia.module.scss'

const MagnetoSocialMedia = () => {
  return (
    <div className={`${style[`${classMUI}-magneto-social-media`]}`}>
      {/* //TODO: i need confirm if floow text should be displaed */}
      <p className={`${style[`${classMUI}-magneto-social-media__follow-text`]}`}>Siguenos:</p>
      <ListIconLink spacing={10} size={36} listIcon={ListIcon} />
      <div className={`${style[`${classMUI}-magneto-social-media__app-links-container`]}`}>
        <a href="#">
          <img
            className={`${style[`${classMUI}-magneto-social-media__app-links-container--img`]}`}
            src={GooglePlay}
            alt="google-play-image"
          />
        </a>
        <a href="#">
          <img
            className={`${style[`${classMUI}-magneto-social-media__app-links-container--img`]}`}
            src={AppGallery}
            alt="app-gallery-image"
          />
        </a>
        <a href="#">
          <img
            className={`${style[`${classMUI}-magneto-social-media__app-links-container--img`]}`}
            src={AppStore}
            alt="app-store-image"
          />{' '}
        </a>
      </div>
    </div>
  )
}

export default MagnetoSocialMedia
