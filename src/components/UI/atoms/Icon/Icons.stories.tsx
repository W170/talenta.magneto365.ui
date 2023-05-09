import { IconItem } from './Icon.component'
import { Facebook } from 'iconsax-react'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof IconItem> = {
  title: 'Atoms/Icon',
  component: IconItem,
  tags: ['autodocs'],
  args: {
    Icon: Facebook,
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
