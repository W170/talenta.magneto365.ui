import React from 'react'
import { typographyStyles, applyWrappers, omitTypographyProps } from '../../Typography.constant'
import { TTypographyParagraph } from './TypographyParagraph.interface'

const Component: React.FC<TTypographyParagraph> = ({ children, ...props }) => {
  const { className, style } = typographyStyles({ ...props })

  return (
    <p {...omitTypographyProps(props)} className={className} style={style}>
      {applyWrappers(children, props)}
    </p>
  )
}

export const TypographyParagraph = Component
