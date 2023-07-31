import { Meta, StoryObj } from '@storybook/react'
import { MainButton } from './MainButton.component'
import { ProfileAdd } from '../../../../constants/icons.constants'

const meta: Meta<typeof MainButton> = {
  title: 'Atoms/Main Button',
  component: MainButton,
  args: {}
}
export default meta

type Story = StoryObj<typeof MainButton>

export const Default: Story = {
  args: {
    buttonType: 'submit',
    buttonSize: 'medium',
    buttonText: 'Crear hoja de vida',
    iconProps: {
      icon: ProfileAdd,
      hover: true,
      color: '#090467 '
    },
    buttonStyles: {
      buttonColor: '#70ECD4',
      textColor: '#090467',
      spacing: '10px'
    }
  }
}

export const Responsive: Story = {
  args: {
    buttonType: 'button',
    buttonSize: 'medium',
    buttonText: 'Crear hoja de vida',
    iconProps: {
      icon: ProfileAdd,
      hover: true,
      color: '#090467 '
    },
    buttonStyles: {
      buttonColor: '#70ECD4',
      textColor: '#090467'
    },
    isMobile: true
  }
}
