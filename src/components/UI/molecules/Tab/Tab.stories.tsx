import { Meta, StoryObj } from '@storybook/react'
import { Tab } from './Tab.component'

const leftLink = {
  type: 'link' as const,
  href: '#',
  text: 'Busco Empleo',
  linkProps: {
    textColor: '#000'
  }
}
const leftTabButton = {
  tabButtonColor: '#FFF',
  tabButtonTextSize: '11px',
  tabButtonTextWeight: '700',
  boxShadow: true
}

const rightLink = {
  type: 'link' as const,
  href: '#',
  text: 'Soy empresa',
  linkProps: {
    textColor: '#A3A3B5'
  }
}
const rightTabButton = {
  tabButtonColor: '#F4F4FA',
  tabButtonTextSize: '11px',
  tabButtonTextWeight: '400',
  boxShadow: false
}

const leftButton = {
  linkProps: leftLink,
  tabButtonProps: leftTabButton
}

const rightButton = {
  linkProps: rightLink,
  tabButtonProps: rightTabButton
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
