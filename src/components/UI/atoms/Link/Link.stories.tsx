import { Meta, StoryObj } from '@storybook/react'
import { Link } from './Link.component'
import { Login } from 'iconsax-react'

const meta: Meta<typeof Link> = {
  title: 'Atoms/Link',
  component: Link,
  args: {
    type: 'link',
    href: '#',
    text: 'Hello world',
    linkProps: {
      textColor: '#14141C',
      buttonColor: 'transparent',
      hoverColor: '#14141C'
    }
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
    linkProps: {
      iconProps: {
        Icon: Login,
        hover: true
      }
    }
  }
}

export const ResponsiveIconButton: Story = {
  args: {
    type: 'button',
    text: 'Iniciar sesión',
    linkProps: {
      iconProps: {
        Icon: Login,
        hover: true
      },

      textColor: '#14141C',
      buttonColor: 'transparent',
      hoverColor: '#14141C'
    },
    isMobile: true
  }
}
