import { Meta, StoryObj } from '@storybook/react'
import { SharePopover } from './SharePopover'
import { shareLinks } from '../../../../constants/stories/vacancies.constants'

const meta: Meta<typeof SharePopover> = {
  title: 'Molecules/SharePopover',
  component: SharePopover,
  args: {
    shareButtonProps: {
      buttonText: 'Compartir',
      buttonTitle: 'Compartir',
      icon: 'share2',
      onCopySuccess: () => null
    },
    iconPopover: 'archiveAdd',
    shareLinks
  }
}

export default meta

type Story = StoryObj<typeof SharePopover>

export const Default: Story = {}
