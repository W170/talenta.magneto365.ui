import { ILinkProps } from '../../atoms'
import { TabButton } from './TabButton.component'
import { StoryObj, Meta } from '@storybook/react'

const link: ILinkProps = {
  type: 'link' as const,
  href: '#',
  text: 'Busco Empleo'
}
const tabButton = {
  boxShadow: true,
  tabButtonTextSize: '11px',
  tabButtonTextWeight: '700'
}

const meta: Meta<typeof TabButton> = {
  title: 'Molecules/Tab Button',
  component: TabButton,
  args: {}
}

export default meta

type Story = StoryObj<typeof TabButton>

export const Default: Story = {
  args: {
    tabButtonLink: link,
    tabButtonLinkStyles: {
      buttonColor: '#FFF',
      textColor: '#000',
      hoverColor: '#000',
      visitedColor: '#000'
    },
    tabButtonStyles: tabButton
  }
}

export const Untoggle: Story = {
  args: {
    tabButtonLink: {
      type: 'link' as const,
      href: '#',
      text: 'Soy empresa'
    },
    tabButtonLinkStyles: {
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
}

export const WithTranslation: Story = {
  args: {
    tabButtonLink: {
      type: 'link' as const,
      href: '#',
      text: 'I am looking for job'
    },
    tabButtonLinkStyles: {
      buttonColor: '#FFF',
      textColor: '#000',
      hoverColor: '#000',
      visitedColor: '#000'
    },
    tabButtonStyles: {
      tabButtonTextSize: '11px',
      tabButtonTextWeight: '700',
      boxShadow: true
    }
  }
}
