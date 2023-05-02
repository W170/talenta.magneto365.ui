import { TabButton } from './TabButton.component'
import { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof TabButton> = {
  title: 'Molecules/Tab Button',
  component: TabButton,
  args: {
    link: '#',
    text: 'Busco Empleo',
    size: '11px'
  }
}

export default meta

type Story = StoryObj<typeof TabButton>

export const Default: Story = {}
