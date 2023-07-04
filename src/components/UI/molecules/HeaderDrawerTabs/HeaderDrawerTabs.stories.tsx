import { Meta, StoryObj } from '@storybook/react'
import { HeaderDrawerTabs } from './HeaderDrawerTabs.components'
import { logoProps } from '../../../../constants/stories.constants'
import { ITabButton } from '../TabButton'

const leftTabLink = {
  type: 'link' as const,
  href: '#',
  text: 'Busco Empleo'
}
const leftTabStyle: ITabButton = {
  tabButtonLinkStyles: {
    buttonColor: '#FFF',
    textColor: '#000',
    hoverColor: '#000',
    visitedColor: '#000'
  },
  tabButtonStyles: {
    tabButtonColor: '#FFF',
    tabButtonTextSize: '11px',
    tabButtonTextWeight: '700',
    boxShadow: true
  }
}

const rightTabLink = {
  type: 'link' as const,
  href: '#',
  text: 'Soy empresa'
}

const rightTabStyle: ITabButton = {
  tabButtonLinkStyles: {
    buttonColor: 'transparent',
    textColor: '#A3A3B5',
    hoverColor: '#A3A3B5',
    visitedColor: '#A3A3B5'
  },
  tabButtonStyles: {
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
