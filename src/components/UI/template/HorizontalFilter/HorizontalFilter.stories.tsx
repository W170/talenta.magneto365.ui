import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import HorizontalFilter from './HorizontalFilter.component'
import { sideFilterProps } from '@constants/stories'

const meta: Meta<typeof HorizontalFilter> = {
  title: 'Template/Horizontal Filter',
  component: HorizontalFilter,
  args: sideFilterProps,
  decorators: [
    (Story) => (
      <div style={{ margin: '-16px' }}>
        <Story />
      </div>
    )
  ]
}

export default meta
type Story = StoryObj<typeof HorizontalFilter>

export const Default: Story = {}
