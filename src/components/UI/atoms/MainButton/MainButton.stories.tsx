import { Meta, StoryObj } from '@storybook/react'
import { MainButton } from './MainButton.component'
import { ProfileAdd } from 'iconsax-react'

const meta: Meta<typeof MainButton> = {
  title: 'Atoms/MainButton',
  component: MainButton,
  args: {
    buttonType: 'button',
    buttonSize: 'medium',
    iconProps: {
      Icon: ProfileAdd,
      hover: true,
      color: '#090467 '
    },
    buttonText: 'Crear hoja de vida',
    buttonColor: '#70ECD4',
    textColor: '#090467'
  }
}
export default meta

type Story = StoryObj<typeof MainButton>

export const Default: Story = {}
