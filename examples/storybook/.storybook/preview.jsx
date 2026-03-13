import React from 'react'
import { MagnetoUIProvider } from 'magneto365.ui'

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  options: {
    storySort: {
      order: [
        'Welcome',
        'Primitives',
        'Inputs',
        'Feedback',
        'Navigation',
        'Overlays',
        'Data Display',
        'Layout',
        'Domain',
        'Legacy',
        '*'
      ]
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
