import { ILinkProps } from '../../atoms'
import { TabButton } from './TabButton.component'
import { StoryObj, Meta } from '@storybook/react'

const link: ILinkProps = {
  type: 'link' as const,
  href: '#',
  text: 'Busco Empleo'
}
const tabButton = {
  tabButtonTextSize: '11px',
  tabButtonTextWeight: '700',
  boxShadow: true
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
      textColor: '#14141C',
      hoverColor: '#04004d',
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
      textColor: '#A3A3B5',
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
      hoverColor: '#04004d',
      visitedColor: '#04004d'
    },
    tabButtonStyles: {
      tabButtonTextSize: '11px',
      tabButtonTextWeight: '700',
      boxShadow: true
    }
  }
}
