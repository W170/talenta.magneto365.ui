import React from 'react'
import { ContextAppProvider } from '../src/components/context/context.component'

export const withContext = (Story, context) => {
  return (
    <ContextAppProvider device="desktop">
      <Story />
    </ContextAppProvider>
  )
}
