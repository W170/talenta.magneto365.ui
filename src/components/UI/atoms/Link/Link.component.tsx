import React from 'react'
import { ILinkProps } from './Link.interface'
import styles from './Link.modules.scss' // Import the CSS file
import { IconItem } from '../Icon'

const Link: React.FC<ILinkProps> = ({ type, href, text, linkStyles, iconProps, isMobile }) => {
  return (
    <a
      className={styles.linkComponent}
      href={href}
      data-link-type={type}
      data-is-mobile={isMobile}
      data-button-color={linkStyles?.buttonColor}
      data-text-color={linkStyles?.textColor}
      data-hover-color={linkStyles?.hoverColor}
      data-visited-color={linkStyles?.visitedColor}
    >
      {iconProps && <IconItem {...iconProps} />}
      {!isMobile && <p>{text}</p>}
    </a>
  )
}

/**
 * Atomic UI component for Link
 */

export default Link
