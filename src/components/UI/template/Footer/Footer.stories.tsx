import { Meta, StoryObj } from '@storybook/react'
import { Footer } from './'

const meta: Meta<typeof Footer> = {
  title: 'Template/Footer',
  component: Footer,
  tags: ['autodocs'],
  args: {}
}

export default meta

type Story = StoryObj<typeof Footer>

export const Default: Story = {}
