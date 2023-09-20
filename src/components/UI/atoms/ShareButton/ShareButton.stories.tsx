import { Meta, StoryObj } from '@storybook/react'
import { ShareButton } from './ShareButton.component'

const meta: Meta<typeof ShareButton> = {
  title: 'Atoms/ Share Button',
  component: ShareButton,
  args: {}
}

export default meta

type Story = StoryObj<typeof ShareButton>

export const Default: Story = {
  args: {
    buttonText: 'Compartir',
    buttonTitle: 'Compartir Vacante',
    onCopySuccess: () => console.log('Success')
  }
}
