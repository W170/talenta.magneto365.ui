import { Meta, StoryObj } from '@storybook/react'
import { LogoutHeader } from './LogoutHeader.component'
import { LeftTabStyles, RightTabStyles } from '../../../../constants/stories.constants'

const leftLink = {
  type: 'link' as const,
  href: '#',
  text: 'Busco Empleo',
  linkProps: {
    textColor: '#000'
  }
}
const rightLink = {
  type: 'link' as const,
  href: '#',
  text: 'Soy empresa',
  linkProps: {
    textColor: '#A3A3B5'
  }
}

const LeftTabButton = {
  linkProps: leftLink,
  ...LeftTabStyles
}
const RightTabButton = {
  linkProps: rightLink,
  ...RightTabStyles
}

const Searchbar = {
  placeholder: 'Buscar',
  onSearch: (value: string) => console.log(value)
}

const SignInProps = {
  type: 'button' as const,
  text: 'Iniciar Sesion',
  href: '#'
}

const meta: Meta<typeof LogoutHeader> = {
  title: 'Organism/Logout Header',
  component: LogoutHeader,
  args: {
    tabButtons: {
      leftButton: LeftTabButton,
      rightButton: RightTabButton
    },
    searchbarConfig: Searchbar,
    signInLink: SignInProps
  }
}

export default meta

type Story = StoryObj<typeof LogoutHeader>

export const Default: Story = {}
