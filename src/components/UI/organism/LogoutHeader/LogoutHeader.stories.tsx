import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { LogoutHeader } from './LogoutHeader.component'
import { IMobileSearchbar } from '../../molecules'
import { breadcrumbProps } from '@constants/stories'

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
  href: '/login'
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
    breadcrumbProps: breadcrumbProps,
    homeUrl: '/home',
    allJobsLink: '#',
    allJobsText: 'Todos los empleos'
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '-16px' }}>
        <Story />
      </div>
    )
  ]
}

export default meta

type Story = StoryObj<typeof LogoutHeader>

export const Default: Story = {}
