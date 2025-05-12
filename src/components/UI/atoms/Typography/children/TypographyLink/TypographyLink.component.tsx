import React, { forwardRef } from 'react'
import { typographyStyles, applyWrappers, omitTypographyProps } from '../../Typography.constant'
import { ITypographyLink } from './TypographyLink.interface'

const BaseComponent = ({ children, ...props }: ITypographyLink, ref: React.ForwardedRef<HTMLAnchorElement>) => {
  const { className, style } = typographyStyles({ ...props })

  return (
    <a {...omitTypographyProps(props)} className={className} style={style} ref={ref}>
      {applyWrappers(children, props)}
    </a>
  )
}

const Component = forwardRef<HTMLAnchorElement, ITypographyLink>(BaseComponent)

/**
 * Atom UI child component of Typography
 */
export const TypographyLink = Component
