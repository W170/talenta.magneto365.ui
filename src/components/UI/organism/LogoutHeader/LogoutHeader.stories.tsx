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
    //
  }
}

const SignInProps = {
  type: 'button' as const,
  text: 'Iniciar Sesion',
  href: '#'
}

const MobileSearchbarProps = {
  onSearch: () => {
    //
  }
}

const SignUpProps = {
  buttonType: 'button' as const,
  buttonText: 'Crear Cuenta',
  buttonSize: 'medium' as const
}

const meta: Meta<typeof LogoutHeader> = {
  title: 'Organism/Logout Header',
  component: LogoutHeader,
  args: {
    leftTabButton: leftLinkProps,
    rightTabButton: rightLinkProps,
    searchbar: SearchbarProps,
    mobileSearchbar: MobileSearchbarProps,
    signInLink: SignInProps,
    signUpButton: SignUpProps,
    breadcrumbsText: '/perfil/empleos/sugeridos'
  }
}

export default meta

type Story = StoryObj<typeof LogoutHeader>

export const Default: Story = {}
