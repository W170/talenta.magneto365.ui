import React, { useMemo, CSSProperties } from 'react'
import { ILinkProps } from './Link.interface'
import styles from './Link.modules.scss'
import { IconItem } from '../Icon'
import { toCSSVariables } from '../../../../shared/utils/Function'

const Component: React.FC<ILinkProps> = ({ type, href, text, iconProps, linkStyles, isMobile, rel, target }) => {
  const stylesValue: CSSProperties = useMemo(() => toCSSVariables(linkStyles), [linkStyles])

  return (
    <a
      className={styles.linkComponent}
      style={stylesValue}
      href={href}
      title={text}
      data-link-type={type}
      data-is-mobile={isMobile}
      rel={rel}
      target={target}
    >
      {iconProps && <IconItem {...iconProps} />}
      {!isMobile && <p>{text}</p>}
    </a>
  )
}

/**
 * Atomic UI component for Link
 */

export const Link = Component
