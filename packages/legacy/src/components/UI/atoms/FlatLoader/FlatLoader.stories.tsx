import { Meta, StoryObj } from '@storybook/react'
import { FlatLoader } from './FlatLoader.component'

const meta: Meta<typeof FlatLoader> = {
  title: 'Atoms/Flat Loader',
  component: FlatLoader,
  tags: ['autodocs'],
  args: {
    color: '#0cd279',
    secondColor: '#eadcee',
    size: 30
  }
}

export default meta

type Story = StoryObj<typeof FlatLoader>

export const Default: Story = {}
