import { ILinkProps } from '../../atoms'
import { TabButton } from './TabButton.component'
import { StoryObj, Meta } from '@storybook/react'

const link: ILinkProps = {
  type: 'link' as const,
  href: '#',
  text: 'Busco Empleo',
  linkStyles: {
    buttonColor: '#FFF',
    textColor: '#000',
    hoverColor: '#000',
    visitedColor: '#000'
  }
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
    tabButtonLinkProps: link,
    tabButtonStyles: tabButton
  }
}

export const Untoggle: Story = {
  args: {
    tabButtonLinkProps: {
      type: 'link' as const,
      href: '#',
      text: 'Soy empresa'
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
    tabButtonLinkProps: {
      type: 'link' as const,
      href: '#',
      text: 'I am looking for job',
      linkStyles: {
        buttonColor: '#FFF',
        textColor: '#000',
        hoverColor: '#000',
        visitedColor: '#000'
      }
    },
    tabButtonStyles: {
      tabButtonTextSize: '11px',
      tabButtonTextWeight: '700',
      boxShadow: true
    }
  }
}
