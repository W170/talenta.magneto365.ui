import { Meta, StoryObj } from '@storybook/react'
import { SharePopover } from './SharePopover'
import { shareLinks } from '../../../../constants/stories/vacancies.constants'

const meta: Meta<typeof SharePopover> = {
  title: 'Molecules/SharePopover',
  component: SharePopover,
  args: {
    buttonText: 'Compartir',
    buttonTitle: 'Compartir',
    shareLinks
  }
}

export default meta

type Story = StoryObj<typeof SharePopover>

export const Default: Story = {}
