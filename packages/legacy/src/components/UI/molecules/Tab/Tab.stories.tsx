import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Tab } from './Tab.component'
import { ITabButton, TabButton } from '../TabButton'

const TabButtonProps: ITabButton = {
  tabButtonLink: {
    type: 'link' as const,
    href: '#',
    text: 'Busco Empleo'
  },
  tabButtonLinkStyles: {
    textColor: '#14141C',
    buttonColor: '#FFF',
    hoverColor: '#04004d',
    visitedColor: '#000'
  },
  tabButtonStyles: {
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
    text: 'Soy empresa'
  },
  tabButtonLinkStyles: {
    textColor: '#A3A3B5',
    buttonColor: 'transparent',
    hoverColor: '#04004d',
    visitedColor: '#A3A3B5'
  },
  tabButtonStyles: {
    tabButtonColor: '#F4F4FA',
    tabButtonTextSize: '11px',
    tabButtonTextWeight: '400',
    boxShadow: false
  }
}

const TabButton2Props: ITabButton = {
  tabButtonLink: {
    type: 'link' as const,
    href: '#',
    text: 'I am looking for a job'
  },
  tabButtonLinkStyles: {
    textColor: '#14141C',
    buttonColor: '#FFF',
    hoverColor: '#04004d',
    visitedColor: '#000'
  },
  tabButtonStyles: {
    tabButtonColor: '#FFF',
    tabButtonTextSize: '11px',
    tabButtonTextWeight: '700',
    boxShadow: true
  }
}

const TabButton2Props2: ITabButton = {
  tabButtonLink: {
    type: 'link' as const,
    href: '#',
    text: 'I am a recruiter'
  },
  tabButtonLinkStyles: {
    textColor: '#A3A3B5',
    buttonColor: 'transparent',
    hoverColor: '#04004d',
    visitedColor: '#A3A3B5'
  },
  tabButtonStyles: {
    tabButtonColor: '#F4F4FA',
    tabButtonTextSize: '11px',
    tabButtonTextWeight: '400',
    boxShadow: false
  }
}

const meta: Meta<typeof Tab> = {
  title: 'Molecules/Tab',
  component: Tab,
  args: {}
}

export default meta

type Story = StoryObj<typeof Tab>

export const Default: Story = {
  args: {
    children: (
      <>
        <TabButton
          tabButtonLink={TabButtonProps.tabButtonLink}
          tabButtonLinkStyles={TabButtonProps.tabButtonLinkStyles}
          tabButtonStyles={TabButtonProps.tabButtonStyles}
        />
        <TabButton
          tabButtonLink={TabButtonProps2.tabButtonLink}
          tabButtonLinkStyles={TabButtonProps2.tabButtonLinkStyles}
          tabButtonStyles={TabButtonProps2.tabButtonStyles}
        />
      </>
    )
  }
}

export const WithTranslations: Story = {
  args: {
    children: (
      <>
        <TabButton
          tabButtonLink={TabButton2Props.tabButtonLink}
          tabButtonLinkStyles={TabButton2Props.tabButtonLinkStyles}
          tabButtonStyles={TabButton2Props.tabButtonStyles}
        />
        <TabButton
          tabButtonLink={TabButton2Props2.tabButtonLink}
          tabButtonLinkStyles={TabButton2Props2.tabButtonLinkStyles}
          tabButtonStyles={TabButton2Props2.tabButtonStyles}
        />
      </>
    )
  }
}
