import { Meta, StoryObj } from '@storybook/react'
import { InputSelect } from './'

const meta: Meta<typeof InputSelect> = {
  title: 'Organism/Input Select',
  component: InputSelect,
  args: {}
}
export default meta

type Story = StoryObj<typeof InputSelect>

export const Default: Story = {}
