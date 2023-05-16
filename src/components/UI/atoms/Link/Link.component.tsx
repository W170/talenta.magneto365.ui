import React from 'react'
import { ILinkProps } from './Link.interface'
import { withStyles } from './Link.styles'
import { IconItem } from '../Icon'
import { withContextAppProvider } from '../../../context/context.component'
import { useMediaQuery } from '../../../hooks'

const Component: React.FC<ILinkProps> = ({ href, text, iconProps, className }) => {
  const linkText = useMediaQuery(text, {
    xs: null,
    sm: null
  })

  return (
    <a className={className} href={href}>
      {iconProps && <IconItem {...iconProps} />}
      {linkText && <p>{linkText}</p>}
    </a>
  )
}

/**
 * Atomic UI component for Link
 */
export const Link = withContextAppProvider(withStyles(Component))
