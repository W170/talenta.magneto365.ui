import React, { useMemo } from 'react'
import { typographyStyles, applyWrappers, omitTypographyProps } from '../../Typography.constant'
import { ITypographyTitle } from './TypographyTitle.interface'

const Component: React.FC<ITypographyTitle> = ({ children, level = 2, ...props }) => {
  const { className, style } = typographyStyles({ ...props })

  const Wrapper = useMemo(() => {
    const safeLevel = Math.min(Math.max(level, 1), 6)
    return `h${safeLevel}` as keyof JSX.IntrinsicElements
  }, [level])

  return React.createElement(
    Wrapper,
    { ...omitTypographyProps(props), className, style },
    applyWrappers(children, props)
  )
}

export const TypographyTitle = Component
