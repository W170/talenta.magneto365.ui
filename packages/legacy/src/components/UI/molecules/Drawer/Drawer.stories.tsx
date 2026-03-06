import { Meta, StoryObj } from '@storybook/react'
import { Drawer } from './Drawer.component'

const container = document.createElement('div')
container.id = 'drawer-container'
container.style.position = 'fixed'
container.style.top = '0'
container.style.left = '0'
container.style.width = '100px'
container.style.height = '100px'
document.body.appendChild(container)

const baseArgs = {
  isOpen: false
}

const meta: Meta<typeof Drawer> = {
  title: 'Molecules/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  args: baseArgs,
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof Drawer>

export const Default: Story = {}

export const WithCustomContainer: Story = {
  args: {
    ...baseArgs,
    customContainer: document.getElementById('drawer-container') || document.body
  }
}
