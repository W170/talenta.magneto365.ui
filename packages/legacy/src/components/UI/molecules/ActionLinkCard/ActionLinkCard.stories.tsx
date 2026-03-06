import { Meta, StoryObj } from '@storybook/react'
import { ActionLinkCard } from './ActionLinkCard.component'
import { actionLinkCard } from '../../../../constants/stories/seeCompanyCard.constant'

const meta: Meta<typeof ActionLinkCard> = {
  title: 'Molecules/Action Link Card',
  component: ActionLinkCard,
  args: {
    ...actionLinkCard
  }
}

export default meta

type Story = StoryObj<typeof ActionLinkCard>

export const Default: Story = {}
