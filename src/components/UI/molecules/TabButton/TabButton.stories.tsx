import { TabButton } from './TabButton.component'
import { StoryObj, Meta } from '@storybook/react'

const link = {
  type: 'link' as const,
  href: '#',
  text: 'Busco Empleo',
  linkStyles: {
    textColor: '#000',
    buttonColor: '#FFF'
  }
}
const tabButton = {
  boxShadow: true,
  tabButtonTextSize: '11px',
  tabButtonTextWeight: '400'
}

const meta: Meta<typeof TabButton> = {
  title: 'Molecules/Tab Button',
  component: TabButton,
  args: {
    tabButtonLink: link,
    tabButtonStyle: tabButton
  }
}

export default meta

type Story = StoryObj<typeof TabButton>

export const Default: Story = {}

export const Untoggle: Story = {
  args: {
    tabButtonLink: {
      type: 'link' as const,
      href: '#',
      text: 'Soy empresa'
    },
    tabButtonStyle: {
      tabButtonColor: '#F4F4FA',
      tabButtonTextSize: '11px',
      tabButtonTextWeight: '400',
      boxShadow: false
    }
  }
}
