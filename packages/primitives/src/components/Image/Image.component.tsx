import React from 'react'
import { IImage } from './Image.interface'
import styles from './Image.module.scss'

const Image: React.FC<IImage> = ({ image, alt, playIcon, className }) => {
  return (
    <>
      <img src={image} alt={alt} loading="lazy" className={className} />
      {playIcon && <div className={styles['magneto-ui-play-button']}>{playIcon}</div>}
    </>
  )
}

export default Image
