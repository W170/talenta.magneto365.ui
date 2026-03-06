import { Meta, StoryObj } from '@storybook/react'
import { Toggle } from './Toggle.component'

const meta: Meta<typeof Toggle.Switch> = {
  title: 'Atoms/Toggle',
  component: Toggle.Switch
}

export default meta

type Story = StoryObj<typeof Toggle.Switch>

export const Switch: Story = {}
