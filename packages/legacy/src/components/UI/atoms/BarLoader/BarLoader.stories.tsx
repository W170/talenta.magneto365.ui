import { Meta, StoryObj } from '@storybook/react'
import { BarLoader } from './BarLoader.component'

const meta: Meta<typeof BarLoader> = {
  title: 'Atoms/Bar Loader',
  component: BarLoader,
  tags: ['autodocs'],
  args: {
    color: '#090467'
  }
}

export default meta

type Story = StoryObj<typeof BarLoader>

export const Default: Story = {}
