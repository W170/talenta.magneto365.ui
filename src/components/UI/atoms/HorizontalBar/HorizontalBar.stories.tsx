import { Meta, StoryObj } from '@storybook/react'
import { HorizontalBar } from './HorizontalBar.component'

const meta: Meta<typeof HorizontalBar> = {
  title: 'Atoms/Horizontal Bar',
  component: HorizontalBar,
  args: {
    value: 10,
    maxPercentage: 100,
    color: '#000',
    text: 'Comercial, marketing y atención al cliente'
  }
}

export default meta

type Story = StoryObj<typeof HorizontalBar>

export const Default: Story = {}
