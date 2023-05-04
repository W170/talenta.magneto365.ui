import { Meta, StoryObj } from '@storybook/react'
import { MainButton } from './MainButton.component'
import { LoginCurve, ProfileAdd } from 'iconsax-react'

const meta: Meta<typeof MainButton> = {
  title: 'Atoms/MainButton',
  component: MainButton,
  args: {
    btnSize: 'medium',
    btnColor: 'transparent',
    buttonText: 'Iniciar Sesion',
    textColor: '#14141C',
    childrenProps: {
      Icon: LoginCurve,
      hover: true,
      color: '#14141C',
      size: 18
    }
  }
}

export default meta

type Story = StoryObj<typeof MainButton>

export const Default: Story = {}

export const LogIn: Story = {
  args: {
    buttonText: 'Crear hoja de vida',
    textColor: '#090467',
    btnColor: '#70ECD4',
    childrenProps: {
      Icon: ProfileAdd,
      hover: true,
      color: '#090467 '
    }
  }
}
