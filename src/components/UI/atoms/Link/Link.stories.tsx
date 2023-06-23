import { Meta, StoryObj } from '@storybook/react'
import Link from './Link.component'
import { Login } from 'iconsax-react'

const meta: Meta<typeof Link> = {
  title: 'Atoms/Link',
  component: Link,
  args: {
    type: 'link',
    href: '#',
    text: 'Hello world',
    linkStyles: {
      textColor: '#14141C',
      buttonColor: 'transparent',
      hoverColor: '#14141C'
    },
    isMobile: false
  }
}

export default meta

type Story = StoryObj<typeof Link>

export const Anchor: Story = {}

export const Button: Story = {
  args: {
    type: 'button',
    href: '#',
    text: 'Iniciar Sesion',
    linkStyles: {
      textColor: '#14141C',
      buttonColor: 'red',
      hoverColor: '#14141C'
    }
  }
}

export const IconButton: Story = {
  args: {
    type: 'button',
    iconProps: {
      Icon: Login,
      hover: true
    },
    linkStyles: {
      textColor: '#14141C',
      buttonColor: 'transparent',
      hoverColor: '#14141C'
    }
  }
}

export const ResponsiveIconButton: Story = {
  args: {
    type: 'button',
    text: 'Iniciar sesión',
    iconProps: {
      Icon: Login,
      hover: true,
      color: '#14141C'
    },
    isMobile: true
  }
}
