import React from 'react'
import { Body, Header, Toggler } from './children'
import { TCollapse } from './Collapse.interface'
import * as context from './Collapse.context'

const Component: React.FC<TCollapse> = ({ children, defaultOpen, open, onChangeOpen, ...props }) => {
  return (
    <context.Provider defaultOpen={defaultOpen} open={open} onChangeOpen={onChangeOpen}>
      <div {...props}>{children}</div>
    </context.Provider>
  )
}

/**
 * Atom UI component of Collapse
 */
export const Collapse = Object.assign(Component, {
  Body,
  Header,
  Toggler,
  ...context
})
