import React from 'react'
import { typographyStyles, applyWrappers } from '../../Typography.constant'
import { ITypographyText } from './TypographyText.interface'

const Component: React.FC<ITypographyText> = ({ children, ...props }) => {
  return <span className={typographyStyles({ ...props })}>{applyWrappers(children, props)}</span>
}

export const Text = Component
