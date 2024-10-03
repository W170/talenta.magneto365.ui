import { StoryObj, Meta } from '@storybook/react'
import MegaMenuCards from './MegaMenuCards.component'
import { megaMenuCards, megaMenuJobsIcon } from '@constants/stories'

const meta: Meta<typeof MegaMenuCards> = {
  title: 'Molecules/Mega Menu cards',
  component: MegaMenuCards,
  args: megaMenuCards
}

export default meta

type Story = StoryObj<typeof MegaMenuCards>

export const Default: Story = {}

export const Icons: Story = {
  args: {
    ...megaMenuCards,
    jobs: megaMenuJobsIcon
  }
}
