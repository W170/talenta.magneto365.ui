import { Tab } from './Tab.component'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Tab> = {
  title: 'Molecules/Tab',
  component: Tab,
  args: {
    href: '#',
    label: 'Soy Empresa',
    childrenProps: {
      link: '#',
      size: '11px',
      text: 'Busco Empleo'
    }
  }
}

export default meta

type Story = StoryObj<typeof Tab>

export const Default: Story = {}
