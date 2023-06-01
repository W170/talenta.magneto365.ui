import { TabButton } from './TabButton.component'
import { StoryObj, Meta } from '@storybook/react'

const linkProps = {
  type: 'link' as const,
  href: '#',
  text: 'Busco Empleo',
  buttonColor: '#FFF',
  textColor: '#000'
}
const tabButtonProps = {
  boxShadow: true,
  tabButtonTextSize: '11px',
  tabButtonTextWeight: '400'
}

const meta: Meta<typeof TabButton> = {
  title: 'Molecules/Tab Button',
  component: TabButton,
  args: {
    linkProps: linkProps,
    tabButtonProps: tabButtonProps
  }
}

export default meta

type Story = StoryObj<typeof TabButton>

export const Default: Story = {}

export const Untoggle: Story = {
  args: {
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
}
