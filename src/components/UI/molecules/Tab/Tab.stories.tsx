import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Tab } from './Tab.component'
import { ITabButton, TabButton } from '../TabButton'

const TabButtonProps: ITabButton = {
  tabButtonLink: {
    type: 'link' as const,
    href: '#',
    text: 'Busco Empleo',
    linkStyles: {
      textColor: '#000',
      buttonColor: '#FFF'
    }
  },
  tabButtonStyle: {
    tabButtonColor: '#FFF',
    tabButtonTextSize: '11px',
    tabButtonTextWeight: '700',
    boxShadow: true
  }
}

const TabButtonProps2: ITabButton = {
  tabButtonLink: {
    type: 'link' as const,
    href: '#',
    text: 'Soy empresa',
    linkStyles: {
      textColor: '#A3A3B5'
    }
  },
  tabButtonStyle: {
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
    children: (
      <>
        <TabButton tabButtonLink={TabButtonProps.tabButtonLink} tabButtonStyle={TabButtonProps.tabButtonStyle} />
        <TabButton tabButtonLink={TabButtonProps2.tabButtonLink} tabButtonStyle={TabButtonProps2.tabButtonStyle} />
      </>
    )
  }
}

export default meta

type Story = StoryObj<typeof Tab>

export const Default: Story = {}
