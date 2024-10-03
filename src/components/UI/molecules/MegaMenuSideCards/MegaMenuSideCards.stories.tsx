import { StoryObj, Meta } from '@storybook/react'
import MegaMenuSideCards from './MegaMenuSideCards.component'
import { megaMenuCards, megaMenuJobsIcon } from '@constants/stories'

const meta: Meta<typeof MegaMenuSideCards> = {
  title: 'Molecules/Mega Menu Side Cards',
  component: MegaMenuSideCards,
  args: { ...megaMenuCards, selected: 2 }
}

export default meta

type Story = StoryObj<typeof MegaMenuSideCards>

export const Default: Story = {}

export const Icons: Story = {
  args: {
    ...megaMenuCards,
    jobs: megaMenuJobsIcon,
    selected: 2
  }
}
