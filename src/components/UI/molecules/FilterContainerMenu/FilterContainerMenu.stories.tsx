import { Meta, StoryObj } from '@storybook/react'
import { FilterContainerMenu } from './'

const meta: Meta<typeof FilterContainerMenu> = {
  title: 'Molecules/Filter Container Menu',
  component: FilterContainerMenu,
  tags: ['autodocs'],
  args: {},
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof FilterContainerMenu>

export const Default: Story = {}
