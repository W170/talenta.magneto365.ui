import React, { forwardRef } from 'react'
import { typographyStyles, applyWrappers, omitTypographyProps } from '../Typography.constant'
import { ITypographyText } from './TypographyText.interface'

const BaseComponent = ({ children, ...props }: ITypographyText, ref: React.ForwardedRef<HTMLSpanElement>) => {
  const { className, style } = typographyStyles({ ...props })

  return (
    <span {...omitTypographyProps(props)} className={className} style={style} ref={ref}>
      {applyWrappers(children, props)}
    </span>
  )
}

const Component = forwardRef<HTMLSpanElement, ITypographyText>(BaseComponent)

/**
 * Typography child component for rendering inline text (span)
 */
export const TypographyText = Component
