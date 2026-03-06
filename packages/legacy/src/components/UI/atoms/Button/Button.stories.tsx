import { Meta, StoryObj } from '@storybook/react'
import { Link1 } from '@constants/icons.constants'
import { Button } from './Button.component'

const meta: Meta<typeof Button> = {
  title: 'Atoms/ Button',
  component: Button,
  args: {}
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    buttonText: 'Aceptar',
    buttonTitle: 'Aceptar',
    suffixIcon: Link1
  }
}

export const HoverEffect: Story = {
  args: {
    buttonTitle: 'Aceptar',
    suffixIcon: Link1,
    addHover: true
  }
}
