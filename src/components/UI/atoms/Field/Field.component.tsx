import React, { forwardRef } from 'react'
import { Area, Hint, Input, Label, List, Group } from './children'
import { FieldProvider } from './Field.context'
import { IField } from './Field.interface'

const BaseComponent = ({ children, ...props }: IField, ref: React.ForwardedRef<HTMLDivElement>) => {
  return (
    <FieldProvider {...props} fieldRef={ref}>
      {children}
    </FieldProvider>
  )
}

const Component = forwardRef<HTMLDivElement, IField>(BaseComponent)

/**
 * Atom UI of field. It includes .
 */
export const Field = Object.assign(Component, { Area, Hint, Input, Label, List, Group })
