import { Meta, StoryObj } from '@storybook/react'
import { SharePopover } from './SharePopover'

const meta: Meta<typeof SharePopover> = {
  title: 'Molecules/SharePopover',
  component: SharePopover,
  args: {
    buttonText: 'Compartir',
    buttonTitle: 'Compartir',
    shareLinks: [
      {
        title: 'Facebook',
        ariaLabel: 'Facebook',
        href: '#',
        name: 'Facebook'
      },
      {
        title: 'LinkedIn',
        ariaLabel: 'LinkedIn',
        href: '#',
        name: 'LinkedIn'
      },
      {
        title: 'X',
        ariaLabel: 'X',
        href: '#',
        name: 'X'
      },
      {
        title: 'SMS',
        ariaLabel: 'SMS',
        href: '#',
        name: 'Sms'
      }
    ]
  }
}

export default meta

type Story = StoryObj<typeof SharePopover>

export const Default: Story = {}
