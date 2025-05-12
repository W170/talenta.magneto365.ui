import React, { forwardRef } from 'react'
import { typographyStyles, applyWrappers, omitTypographyProps } from '../../Typography.constant'
import { TTypographyParagraph } from './TypographyParagraph.interface'

const BaseComponent = ({ children, ...props }: TTypographyParagraph, ref: React.ForwardedRef<HTMLParagraphElement>) => {
  const { className, style } = typographyStyles({ ...props })

  return (
    <p {...omitTypographyProps(props)} className={className} style={style} ref={ref}>
      {applyWrappers(children, props)}
    </p>
  )
}

const Component = forwardRef<HTMLParagraphElement, TTypographyParagraph>(BaseComponent)

/**
 * Atom UI child component of Typography
 */
export const TypographyParagraph = Component
