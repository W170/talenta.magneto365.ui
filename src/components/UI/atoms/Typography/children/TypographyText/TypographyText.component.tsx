import React from 'react'
import { typographyStyles, applyWrappers, omitTypographyProps } from '../../Typography.constant'
import { ITypographyText } from './TypographyText.interface'

const Component: React.FC<ITypographyText> = ({ children, ...props }) => {
  const { className, style } = typographyStyles({ ...props })

  return (
    <span {...omitTypographyProps(props)} className={className} style={style}>
      {applyWrappers(children, props)}
    </span>
  )
}

export const TypographyText = Component
