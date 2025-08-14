import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { HorizontalBar } from './HorizontalBar.component'

// Define your custom classes
const customStyles = `
  .custom-fill {
    background-color: #000;
  }
  .custom-value {
    color: #fff;
  }
`

const meta: Meta<typeof HorizontalBar> = {
  title: 'Atoms/Horizontal Bar',
  component: HorizontalBar,
  args: {
    value: 10,
    maxPercentage: 100,
    classNames: {
      fill: 'custom-fill',
      value: 'custom-value'
    },
    text: 'Comercial, marketing y atención al cliente'
  },
  decorators: [
    (Story) => (
      <>
        <style>{customStyles}</style>
        <Story />
      </>
    )
  ]
}

export default meta

type Story = StoryObj<typeof HorizontalBar>

export const Default: Story = {}
