import { Meta, StoryObj } from '@storybook/react'
import { SimilarJobsCard } from './'
import { similarVacanciesCardsProps } from '@constants/stories'

const meta: Meta<typeof SimilarJobsCard> = {
  title: 'Molecules/Similar Jobs Card',
  component: SimilarJobsCard,
  args: {
    ...similarVacanciesCardsProps[0]
  }
}

export default meta

type Story = StoryObj<typeof SimilarJobsCard>

export const Default: Story = {}
