import { IconItem } from './Icon.component'
import { Meta, StoryObj } from '@storybook/react'
import { Youtube } from '../../../../constants/icons.constants'

const meta: Meta<typeof IconItem> = {
  title: 'Atoms/Icon',
  component: IconItem,
  tags: ['autodocs'],
  args: {
    icon: Youtube,
    size: 20,
    color: '#094bcf',
    hover: true
  }
}

export default meta

type Story = StoryObj<typeof IconItem>

export const Default: Story = {}

export const DisabledHover: Story = {
  args: {
    hover: false
  }
}
