import { Meta, StoryObj } from '@storybook/react'
import { Link1 } from '@constants/icons.constants'
import { ButtonLink } from './ButtonLink.component'

const meta: Meta<typeof ButtonLink> = {
  title: 'Atoms/ ButtonLink',
  component: ButtonLink,
  args: {}
}

export default meta

type Story = StoryObj<typeof ButtonLink>

export const Default: Story = {
  args: {
    buttonText: 'Aceptar',
    suffixIcon: Link1,
    href: 'https://www.magneto365.com/co/empleos',
    target: '_blank',
    iconSize: 16
  }
}

export const HoverEffect: Story = {
  args: {
    suffixIcon: Link1
  }
}
