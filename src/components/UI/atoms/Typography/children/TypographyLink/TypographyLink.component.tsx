import React from 'react'
import { typographyStyles, applyWrappers, omitTypographyProps } from '../../Typography.constant'
import { ITypographyLink } from './TypographyLink.interface'

const Component: React.FC<ITypographyLink> = ({ children, ...props }) => {
  const { className, style } = typographyStyles({ ...props })

  return (
    <a {...omitTypographyProps(props)} className={className} style={style}>
      {applyWrappers(children, props)}
    </a>
  )
}

export const TypographyLink = Component
