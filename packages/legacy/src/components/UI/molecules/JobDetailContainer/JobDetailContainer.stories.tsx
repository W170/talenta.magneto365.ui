import { Meta, StoryObj } from '@storybook/react'
import { JobDetailContainer } from './'

const meta: Meta<typeof JobDetailContainer> = {
  title: 'Molecules/Job Detail Container',
  component: JobDetailContainer,
  tags: ['autodocs'],
  args: {},
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof JobDetailContainer>

export const Default: Story = {}
