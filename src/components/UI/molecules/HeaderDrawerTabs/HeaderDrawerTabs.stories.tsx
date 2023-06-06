import { Meta, StoryObj } from '@storybook/react'
import { HeaderDrawerTabs } from './HeaderDrawerTabs.components'
import { logoProps } from '../../../../constants/stories.constants'

const leftTabLink = {
  type: 'link' as const,
  href: '#',
  text: 'Busco Empleo',
  linkStyles: {
    textColor: '#000',
    buttonColor: '#FFF'
  }
}
const leftTabStyle = {
  tabButtonStyle: {
    tabButtonColor: '#FFF',
    tabButtonTextSize: '11px',
    tabButtonTextWeight: '700',
    boxShadow: true
  }
}

const rightTabLink = {
  type: 'link' as const,
  href: '#',
  text: 'Soy empresa',
  linkStyles: {
    textColor: '#A3A3B5'
  }
}

const rightTabStyle = {
  tabButtonStyle: {
    tabButtonColor: '#F4F4FA',
    tabButtonTextSize: '11px',
    tabButtonTextWeight: '400',
    boxShadow: false
  }
}

const meta: Meta<typeof HeaderDrawerTabs> = {
  title: 'Molecules/Header Drawer Tabs',
  component: HeaderDrawerTabs,
  args: {
    leftTabLink: leftTabLink,
    leftTabStyle: leftTabStyle,
    rightTabLink: rightTabLink,
    rightTabStyle: rightTabStyle,
    logoProps: logoProps
  }
}

export default meta

type Story = StoryObj<typeof HeaderDrawerTabs>

export const Default: Story = {}
