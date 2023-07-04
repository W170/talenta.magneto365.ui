import { Meta, StoryObj } from '@storybook/react'
import { DrawerMenu } from './DrawerMenu.component'
import { listMenuProps } from '../../../../constants/stories.constants'

const leftLink = {
  type: 'link' as const,
  href: '#',
  text: 'Busco Empleo'
}

const rightLink = {
  type: 'link' as const,
  href: '#',
  text: 'Soy Reclutador'
}

const SignUp = () => {
  //
}

const LogIn = () => {
  //
}

const meta: Meta<typeof DrawerMenu> = {
  title: 'Organism/Drawer Menu',
  component: DrawerMenu,
  tags: ['autodocs'],
  args: {
    headerDrawerProps: { leftTabLink: leftLink, rightTabLink: rightLink, homeUrl: '/home' },
    listMenuProps: listMenuProps,
    createAccountButton: {
      buttonText: 'Crear Cuenta',
      onClick: SignUp
    },
    loginButton: {
      buttonText: 'Iniciar Sesión',
      onClick: LogIn
    }
  }
}

export default meta

type Story = StoryObj<typeof DrawerMenu>

export const Default: Story = {}
