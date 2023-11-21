import { Meta, StoryObj } from '@storybook/react'
import { Paragraph } from './Paragraph.component'

const meta: Meta<typeof Paragraph> = {
  title: 'Atoms/Paragraph',
  component: Paragraph,
  args: {
    paragraph:
      '"Estas son las ofertas de trabajo remoto disponibles hoy {{day}} de {{month}} de {{year}} en diferentes empresas y para diferentes posiciones. ¡Postúlate!"'
  }
}

export default meta

type Story = StoryObj<typeof Paragraph>

export const Default: Story = {}
