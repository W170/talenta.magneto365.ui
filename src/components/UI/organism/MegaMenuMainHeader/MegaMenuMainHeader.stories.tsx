import { Meta, StoryObj } from '@storybook/react'
import { MegaMenuMainHeader } from './MegaMenuMainHeader.component'

const meta: Meta<typeof MegaMenuMainHeader> = {
  title: 'Organism/Mega Menu Main Header',
  component: MegaMenuMainHeader,
  args: {}
}

export default meta

type Story = StoryObj<typeof MegaMenuMainHeader>

export const Default: Story = {}
