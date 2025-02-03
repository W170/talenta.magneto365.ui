import { Meta, StoryObj } from '@storybook/react'
import MegaMenuEmpty from './MegaMenuEmpty.component'

const meta: Meta<typeof MegaMenuEmpty> = {
  title: 'Molecules/Mega Menu Empty',
  component: MegaMenuEmpty,
  tags: ['autodocs'],
  args: {
    title: 'No hay un resultado disponible',
    subtitle: 'En este momento no tenemos un resultado para este contenido. Estamos trabajando en ello.',
    imageData: 'noData'
  }
}

export default meta

type Story = StoryObj<typeof MegaMenuEmpty>

export const Default: Story = {}
