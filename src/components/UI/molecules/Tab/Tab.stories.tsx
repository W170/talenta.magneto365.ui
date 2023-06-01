import { Meta, StoryObj } from '@storybook/react'
import { Tab } from './Tab.component'

const leftButton = {
  linkProps: {
    type: 'link' as const,
    href: '#',
    text: 'Busco Empleo',
    textColor: '#000'
  },
  tabButtonProps: {
    tabButtonColor: '#FFF',
    tabButtonTextSize: '11px',
    tabButtonTextWeight: '700',
    boxShadow: true
  }
}

const rightButton = {
  linkProps: {
    type: 'link' as const,
    href: '#',
    text: 'Soy empresa',
    textColor: '#A3A3B5'
  },
  tabButtonProps: {
    tabButtonColor: '#F4F4FA',
    tabButtonTextSize: '11px',
    tabButtonTextWeight: '400',
    boxShadow: false
  }
}

const meta: Meta<typeof Tab> = {
  title: 'Molecules/Tab',
  component: Tab,
  args: {
    leftButton: leftButton,
    rightButton: rightButton
  }
}

export default meta

type Story = StoryObj<typeof Tab>

export const Default: Story = {}
