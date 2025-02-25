import React, { useMemo } from 'react'
import { ITypographyTitle } from './TypographyTitle.interface'
import { typographyStyles } from '../../Typography.constant'

const Component: React.FC<ITypographyTitle> = ({ children, level = 2, ...props }) => {
  const Wrapper = useMemo(() => {
    const safeLevel = Math.min(Math.max(level, 1), 6)
    return `h${safeLevel}` as keyof JSX.IntrinsicElements
  }, [level])

  return (
    <Wrapper className={typographyStyles({ ...props })}>
      <React.Fragment>{children}</React.Fragment>
    </Wrapper>
  )
}

export const Title = Component
