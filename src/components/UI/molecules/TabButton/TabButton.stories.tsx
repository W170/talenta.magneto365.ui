import { TabButton } from './TabButton.component'
import { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof TabButton> = {
  title: 'Molecules/Tab Button',
  component: TabButton,
  args: {
    buttonLink: '#',
    buttonText: 'Hello World',
    textSize: '11px'
  }
}

export default meta

type Story = StoryObj<typeof TabButton>

export const Default: Story = {}
