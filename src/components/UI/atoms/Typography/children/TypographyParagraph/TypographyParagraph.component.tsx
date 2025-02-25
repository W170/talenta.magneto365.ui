import React from 'react'
import { TTypographyParagraph } from './TypographyParagraph.interface'
import { typographyStyles } from '../../Typography.constant'

const Component: React.FC<TTypographyParagraph> = ({ children, ...props }) => {
  return <p className={typographyStyles({ ...props })}>{children}</p>
}

export const Paragraph = Component
