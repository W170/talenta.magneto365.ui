import React, { useEffect } from 'react'
import { ContextAppProvider } from '../src/components/context/context.component'
export const withContext = (Story: React.FC) => {
  return (
    <ContextAppProvider device="desktop">
      <Story />
    </ContextAppProvider>
  )
}
