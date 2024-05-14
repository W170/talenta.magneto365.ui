import React from 'react'
import { StoryObj, Meta } from '@storybook/react'
import { Tooltip } from './'

const meta: Meta<typeof Tooltip> = {
  title: 'Molecules/Tooltip',
  component: Tooltip,
  args: {
    children: <p>Holi</p>,
    position: 'right',
    title: 'adios'
  }
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  args: {}
}
