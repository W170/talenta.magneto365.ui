import { Meta, StoryObj } from '@storybook/react'
import { IDrawerOrganism, ILogoutHeader } from '../../organism'
import { LogoutTemplate } from './LogoutTemplate.component'
import { breadcrumbProps, listMenuProps } from '@constants/stories'

const logoutHeaderProps: ILogoutHeader = {
  leftTabButton: {
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
  rightTabButton: {
    type: 'link' as const,
    href: '#',
    text: 'Soy empresa',
    linkStyles: {
      textColor: '#A3A3B5',
      buttonColor: 'transparent',
      hoverColor: '#A3A3B5'
    }
  },
  searchbar: {
    placeholder: 'Buscar empleo',
    onSearch: () => ({}),
    termValue: 'Magneto Empleos'
  },
  mobileSearchbar: {
    onSearch: () => ({})
  },
  signInLink: {
    href: '/login',
    type: 'button' as const,
    text: 'Iniciar Sesión'
  },
  signUpButton: {
    buttonType: 'button' as const,
    buttonText: 'Crear cuenta'
  },
  breadcrumbProps: breadcrumbProps,
  homeUrl: '/home'
}

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

const meta: Meta<typeof LogoutTemplate> = {
  title: 'Template/Logout',
  component: LogoutTemplate,
  tags: ['autodocs'],
  args: {
    logoutHeaderProps: logoutHeaderProps,
    headerDrawerMenuProps: headerDrawerMenuProps
  }
}

export default meta

type Story = StoryObj<typeof LogoutTemplate>

export const Default: Story = {}
