import { Link } from './Link.component'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Link> = {
  title: 'Atoms/Link',
  component: Link,
  tags: ['autodocs'],
  args: {
    type: 'link',
    label: 'Hello world'
  },
  argTypes: {
    color: { control: 'color' }
  }
}

export default meta

type Story = StoryObj<typeof Link>

export const Anchor: Story = {}

export const Button: Story = {
  args: {
    type: 'button'
  }
}
