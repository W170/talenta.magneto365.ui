import { Meta, StoryObj } from '@storybook/react'
import { Link } from './Link.component'
import { Login } from 'iconsax-react'

const meta: Meta<typeof Link> = {
  title: 'Atoms/Link',
  component: Link,
  args: {
    href: '#',
    type: 'link',
    text: 'Hello world',
    textColor: '#14141C',
    buttonColor: 'transparent',
    hoverColor: '#14141C'
  }
}

export default meta

type Story = StoryObj<typeof Link>

export const Anchor: Story = {}

export const Button: Story = {
  args: {
    type: 'button'
  }
}

export const IconButton: Story = {
  args: {
    type: 'button',
    iconProps: {
      Icon: Login,
      hover: true
    }
  }
}
