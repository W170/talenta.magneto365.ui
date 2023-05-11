import { Meta, StoryObj } from '@storybook/react'
import { Tab } from './Tab.component'
import { ITabButton } from '../TabButton'

const TabProps: ITabButton[] = [
  {
    linkProps: {
      href: '#',
      text: 'Busco Empleo',
      type: 'link',
      textColor: '#000'
    },
    tabButtonColor: '#FFF',
    tabButtonTextSize: '11px',
    tabButtonTextWeight: '7 00',
    boxShadow: true
  },
  {
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
]

const meta: Meta<typeof Tab> = {
  title: 'Molecules/Tab',
  component: Tab,
  args: {
    tabButtonList: TabProps
  }
}

export default meta

type Story = StoryObj<typeof Tab>

export const Default: Story = {}
