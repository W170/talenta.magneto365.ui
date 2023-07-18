import { Meta, StoryObj } from '@storybook/react'
import { Switch } from './Switch.component'

const meta: Meta<typeof Switch> = {
  title: 'Atoms/Switch',
  component: Switch,
  args: {
    isActive: true,
    title: 'remoto',
    setIsActive: (value) => console.log('Change isSelected', value)
  }
}

export default meta

type Story = StoryObj<typeof Switch>

export const Default: Story = {}
