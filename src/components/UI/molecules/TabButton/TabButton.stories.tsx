import { TabButton } from './TabButton.component'
import { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof TabButton> = {
  title: 'Molecules/Tab Button',
  component: TabButton,
  args: {
    linkProps: {
      href: '#',
      text: 'Busco Empleo',
      type: 'link',
      buttonColor: '#FFF',
      textColor: '#000'
    },
    boxShadow: true,
    tabButtonTextSize: '11px',
    tabButtonTextWeight: '400'
  }
}

export default meta

type Story = StoryObj<typeof TabButton>

export const Default: Story = {}

export const Untoggle: Story = {
  args: {
    linkProps: {
      href: '#',
      text: 'Soy empresa',
      type: 'link',
      textColor: '#A3A3B5'
    },
    tabButtonColor: '#F4F4FA',
    tabButtonTextSize: '11px',
    tabButtonTextWeight: '400',
    boxShadow: false
  }
}
