import { Meta, StoryObj } from '@storybook/react'
import { LogoutHeader } from './LogoutHeader.component'
import { IMobileSearchbar } from '../../molecules'

const leftLinkProps = {
  type: 'link' as const,
  href: '#',
  text: 'Busco Empleo'
}
const rightLinkProps = {
  type: 'link' as const,
  href: '#',
  text: 'Soy empresa'
}

const SearchbarProps = {
  termValue: 'Value ',
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

const MobileSearchbarProps: IMobileSearchbar = {
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
    breadcrumbsText: '/perfil/empleos/sugeridos',
    homeUrl: '/home'
  }
}

export default meta

type Story = StoryObj<typeof LogoutHeader>

export const Default: Story = {}
