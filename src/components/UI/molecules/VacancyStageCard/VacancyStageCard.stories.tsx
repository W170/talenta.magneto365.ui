import { Meta, StoryObj } from "@storybook/react"
import { VacancyStageCard } from "./VacancyStageCard.component"
import { vacancyStageCard } from '@constants/stories';

const meta: Meta <typeof  VacancyStageCard > = {
  title: 'Molecules/VacancyStageCard',
  component: VacancyStageCard,
  args:{
    ...vacancyStageCard
  }  
}
export default meta

type Story = StoryObj <typeof  VacancyStageCard >

export const Default: Story = {}