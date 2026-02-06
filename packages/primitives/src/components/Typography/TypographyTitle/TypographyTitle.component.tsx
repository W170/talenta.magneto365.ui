import React, { useMemo, forwardRef } from 'react'
import { typographyStyles, applyWrappers, omitTypographyProps } from '../Typography.constant'
import { ITypographyTitle } from './TypographyTitle.interface'

const BaseComponent = (
  { children, level = 2, ...props }: ITypographyTitle,
  ref: React.ForwardedRef<HTMLHeadingElement>
) => {
  const { className, style } = typographyStyles({ ...props })

  const Wrapper = useMemo(() => {
    const safeLevel = Math.min(Math.max(level, 1), 6)
    return `h${safeLevel}` as keyof JSX.IntrinsicElements
  }, [level])

  return React.createElement(
    Wrapper,
    { ...omitTypographyProps(props), className, style, ref },
    applyWrappers(children, props)
  )
}

const Component = forwardRef<HTMLHeadingElement, ITypographyTitle>(BaseComponent)

/**
 * Typography child component for rendering heading elements (h1-h6)
 */
export const TypographyTitle = Component
