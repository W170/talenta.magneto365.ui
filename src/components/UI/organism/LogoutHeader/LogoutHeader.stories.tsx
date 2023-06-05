import { Meta, StoryObj } from '@storybook/react'
import { LogoutHeader } from './LogoutHeader.component'

const leftLink = {
  type: 'link' as const,
  href: '#',
  text: 'Busco Empleo',
  linkStyles: {
    textColor: '#000'
  }
}
const rightLink = {
  type: 'link' as const,
  href: '#',
  text: 'Soy empresa',
  linkStyles: {
    textColor: '#A3A3B5'
  }
}

const Searchbar = {
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

const meta: Meta<typeof LogoutHeader> = {
  title: 'Organism/Logout Header',
  component: LogoutHeader,
  args: {
    leftTabButton: leftLink,
    rightTabButton: rightLink,
    searchbarConfig: Searchbar,
    signInLink: SignInProps,
    signUpButton: SignUpProps
  }
}

export default meta

type Story = StoryObj<typeof LogoutHeader>

export const Default: Story = {}
