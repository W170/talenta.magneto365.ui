import React from 'react'
import { MagnetoUIProvider } from 'magneto365.ui'

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

export const decorators = [
  (Story) => (
    <MagnetoUIProvider device="desktop">
      <Story />
    </MagnetoUIProvider>
  )
]
