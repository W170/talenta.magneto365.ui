import { Meta, StoryObj } from '@storybook/react'
import { DrawerMenu } from './DrawerMenu.component'
import { listMenuProps } from '../../../../constants/stories.constants'

const leftLink = {
  type: 'link' as const,
  href: '#',
  text: 'Busco Empleo',
  linkStyles: {
    textColor: '#000',
    buttonColor: '#FFF',
    hoverColor: '#000',
    visitedColor: '#282828'
  }
}

const rightLink = {
  type: 'link' as const,
  href: '#',
  text: 'Soy Reclutador',
  linkStyles: {
    textColor: '#A3A3B5',
    buttonColor: 'transparent',
    hoverColor: '#A3A3B5'
  }
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
