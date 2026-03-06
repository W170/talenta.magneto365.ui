import { Meta, StoryObj } from '@storybook/react'
import MegaMenuTab from './MegaMenuTab.component'

const meta: Meta<typeof MegaMenuTab> = {
  title: 'Atoms/Mega Menu Tab',
  component: MegaMenuTab,
  args: {
    label: 'Prueba',
    selected: true
  }
}

export default meta

type Story = StoryObj<typeof MegaMenuTab>

export const Default: Story = {}
