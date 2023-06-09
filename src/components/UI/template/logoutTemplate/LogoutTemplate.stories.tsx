import { Meta, StoryObj } from '@storybook/react'
import { IDrawerOrganism, ILogoutHeader } from '../../organism'
import { LogoutTemplate } from './LogoutTemplate.component'
import { logoProps, listMenuProps } from '../../../../constants/stories.constants'

const logoutHeaderProps: ILogoutHeader = {
  leftTabButton: {
    type: 'link' as const,
    href: '#',
    text: 'Busco Empleo',
    linkStyles: {
      textColor: '#000'
    }
  },
  rightTabButton: {
    type: 'link' as const,
    href: '#',
    text: 'Soy empresa',
    linkStyles: {
      textColor: '#A3A3B5'
    }
  },
  searchbar: {
    placeholder: 'Buscar empleo',
    onSearch: () => ({}),
    termValue: 'Magneto Empleos'
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
  breadcrumbsText: '/perfil/empleos/sugeridos'
}

const headerDrawerMenuProps: IDrawerOrganism = {
  headerDrawerProps: {
    logoProps: logoProps,
    leftTabLink: {
      type: 'link' as const,
      href: '#',
      text: 'Busco Empleo',
      linkStyles: {
        textColor: '#000'
      }
    },
    rightTabLink: {
      type: 'link' as const,
      href: '#',
      text: 'Soy reclutador',
      linkStyles: {
        textColor: '#A3A3B5'
      }
    }
  },
  listMenuProps: listMenuProps,
  createAccountButton: {
    buttonText: 'Crear Cuenta'
  },
  loginButton: {
    buttonText: 'Iniciar Sesión'
  },
  onClose: () => ({}),
  isOpen: false
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
