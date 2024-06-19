import { Meta, StoryObj } from '@storybook/react'
import { ToggleButton } from './ToggleButton.component'

const meta: Meta<typeof ToggleButton> = {
  title: 'Atoms/Toggle Button',
  component: ToggleButton,
  tags: ['autodocs'],
  args: {
    name: 'Click Here Baby',
    id: '1',
    onChange: ({ name, id }) => console.log({ name, id })
  }
}

export default meta

type Story = StoryObj<typeof ToggleButton>

export const Default: Story = {}
