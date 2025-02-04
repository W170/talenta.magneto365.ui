import { Meta, StoryObj } from '@storybook/react'
import { DotsLoader } from './DotsLoader.component'

const meta: Meta<typeof DotsLoader> = {
  title: 'Atoms/Dots Loader',
  component: DotsLoader
}

export default meta

type Story = StoryObj<typeof DotsLoader>

export const Default: Story = {}
