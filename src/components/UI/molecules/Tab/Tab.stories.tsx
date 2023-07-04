import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Tab } from './Tab.component'
import { ITabButton, TabButton } from '../TabButton'

const TabButtonProps: ITabButton = {
  tabButtonLinkProps: {
    type: 'link' as const,
    href: '#',
    text: 'Busco Empleo',
    linkStyles: {
      textColor: '#000',
      buttonColor: '#FFF',
      hoverColor: '#000',
      visitedColor: '#000'
    }
  },
  tabButtonStyles: {
    tabButtonColor: '#FFF',
    tabButtonTextSize: '11px',
    tabButtonTextWeight: '700',
    boxShadow: true
  }
}

const TabButtonProps2: ITabButton = {
  tabButtonLinkProps: {
    type: 'link' as const,
    href: '#',
    text: 'Soy empresa',
    linkStyles: {
      textColor: '#A3A3B5',
      buttonColor: 'transparent',
      hoverColor: '#A3A3B5'
    }
  },
  tabButtonStyles: {
    tabButtonColor: '#F4F4FA',
    tabButtonTextSize: '11px',
    tabButtonTextWeight: '400',
    boxShadow: false
  }
}

const TabButton2Props: ITabButton = {
  tabButtonLinkProps: {
    type: 'link' as const,
    href: '#',
    text: 'I am looking for a job',
    linkStyles: {
      textColor: '#000',
      buttonColor: '#FFF',
      hoverColor: '#000',
      visitedColor: '#000'
    }
  },
  tabButtonStyles: {
    tabButtonColor: '#FFF',
    tabButtonTextSize: '11px',
    tabButtonTextWeight: '700',
    boxShadow: true
  }
}

const TabButton2Props2: ITabButton = {
  tabButtonLinkProps: {
    type: 'link' as const,
    href: '#',
    text: 'I am a recruiter',
    linkStyles: {
      textColor: '#A3A3B5',
      buttonColor: 'transparent',
      hoverColor: '#A3A3B5'
    }
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
          tabButtonLinkProps={TabButtonProps.tabButtonLinkProps}
          tabButtonStyles={TabButtonProps.tabButtonStyles}
        />
        <TabButton
          tabButtonLinkProps={TabButtonProps2.tabButtonLinkProps}
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
          tabButtonLinkProps={TabButton2Props.tabButtonLinkProps}
          tabButtonStyles={TabButton2Props.tabButtonStyles}
        />
        <TabButton
          tabButtonLinkProps={TabButton2Props2.tabButtonLinkProps}
          tabButtonStyles={TabButton2Props2.tabButtonStyles}
        />
      </>
    )
  }
}
