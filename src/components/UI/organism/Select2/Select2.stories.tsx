import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Select2 } from './Select2.component'
import { SELECT2_PROPS } from '../../../../constants/stories/select2.constants'

const meta: Meta<typeof Select2> = {
  title: 'Organism/Select2',
  component: Select2,
  args: {
    ...SELECT2_PROPS
  }
}
export default meta

type Story = StoryObj<typeof Select2>

export const Default: Story = {}

export const Mobile: Story = {
  args: {
    isMobile: true
  }
}

export const CustomComponentList: Story = {
  name: 'Custom component list',
  args: {
    render: (data, index) => <span>{`${index}. ${JSON.stringify(data)}`}</span>
  }
}
