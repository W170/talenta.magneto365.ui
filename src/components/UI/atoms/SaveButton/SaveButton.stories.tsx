import { Meta, StoryObj } from '@storybook/react'

import { SaveButton } from './SaveButton.component'

const meta: Meta<typeof SaveButton> = {
  title: 'Atoms/ Save Button',
  component: SaveButton,
  args: {}
}

export default meta

type Story = StoryObj<typeof SaveButton>

export const Default: Story = {
  args: {
    buttonText: 'Guardar vacante',
    buttonTitle: 'Guardar vacante',
    isAuthenticated: true
  }
}
