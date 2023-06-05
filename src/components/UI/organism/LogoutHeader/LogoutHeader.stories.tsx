import { Meta, StoryObj } from '@storybook/react'
import { LogoutHeader } from './LogoutHeader.component'

const leftLinkProps = {
  type: 'link' as const,
  href: '#',
  text: 'Busco Empleo',
  linkStyles: {
    textColor: '#000'
  }
}
const rightLinkProps = {
  type: 'link' as const,
  href: '#',
  text: 'Soy empresa',
  linkStyles: {
    textColor: '#A3A3B5'
  }
}

const SearchbarProps = {
  placeholder: 'Buscar',
  onSearch: () => {
    // Logic
  }
}

const SignInProps = {
  type: 'button' as const,
  text: 'Iniciar Sesion',
  href: '#'
}

const SignUpProps = {
  buttonType: 'button' as const,
  buttonText: 'Crear Cuenta',
  buttonSize: 'medium' as const
}

const BreadcrumbsProps = {
  breadcrumbText: '/perfil/empleos/sugeridos'
}

const meta: Meta<typeof LogoutHeader> = {
  title: 'Organism/Logout Header',
  component: LogoutHeader,
  args: {
    leftTabButton: leftLinkProps,
    rightTabButton: rightLinkProps,
    searchbarConfig: SearchbarProps,
    signInLink: SignInProps,
    signUpButton: SignUpProps,
    breadcrumbsItem: BreadcrumbsProps
  }
}

export default meta

type Story = StoryObj<typeof LogoutHeader>

export const Default: Story = {}
