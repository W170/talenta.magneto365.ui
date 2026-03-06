import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import SideFilter from './SideFilter.component'
import { sideFilterProps } from '@constants/stories'

const meta: Meta<typeof SideFilter> = {
  title: 'Template/Side Filter',
  component: SideFilter,
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
type Story = StoryObj<typeof SideFilter>

export const Default: Story = {}
