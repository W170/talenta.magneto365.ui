import { Meta, StoryObj } from '@storybook/react'
import { TabItem } from './TabItem.component'

const meta: Meta<typeof TabItem> = {
  title: 'Molecules/Tab Item',
  component: TabItem,
  args: {}
}

type Story = StoryObj<typeof TabItem>

export const Default: Story = {
  args: {
    text: 'Tab Item',
    onClick: () => alert('Clicked')
  }
}

export const Disabled: Story = {
  args: {
    text: 'Disabled Tab Item',
    onClick: undefined,
    isDisabled: true,
    isSelected: false
  }
}

export const Selected: Story = {
  args: {
    text: 'Selected Tab Item',
    onClick: undefined,
    isDisabled: false,
    isSelected: true
  }
}

export default meta
