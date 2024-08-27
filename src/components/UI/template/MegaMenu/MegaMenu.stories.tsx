import { Meta, StoryObj } from '@storybook/react'
// import { IDrawerOrganism, ILogoutHeader } from '../../organism'
import { MegaMenu } from './MegaMenu.component'
import { listMenuProps, megaMenuSocialHeader } from '@constants/stories'
// import {IMegaMenu} from './MegaMenu.interface'
import { IDrawerOrganism } from '../../organism'

const SignUp = () => {
  //
}

const LogIn = () => {
  //
}

const headerDrawerMenuProps: IDrawerOrganism = {
  headerDrawerProps: {
    homeUrl: '/home',
    leftTabLink: {
      type: 'link' as const,
      href: '#',
      text: 'Busco Empleo',
      linkStyles: {
        textColor: '#000',
        buttonColor: '#FFF',
        hoverColor: '#000',
        visitedColor: '#282828'
      }
    },
    rightTabLink: {
      type: 'link' as const,
      href: '#',
      text: 'Soy reclutador',
      linkStyles: {
        textColor: '#A3A3B5',
        buttonColor: 'transparent',
        hoverColor: '#A3A3B5'
      }
    }
  },
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

const meta: Meta<typeof MegaMenu> = {
  title: 'Template/MegaMenu',
  component: MegaMenu,
  tags: ['autodocs'],
  args: {
    headerProps: megaMenuSocialHeader,
    headerDrawerMenuProps: headerDrawerMenuProps
  }
}

export default meta

type Story = StoryObj<typeof MegaMenu>

export const Default: Story = {}
