import { Meta, StoryObj } from '@storybook/react';
import { VacancyProcessCard } from './VacancyProcessCard.component';
import { vacancyProcessCard } from '@constants/stories';
const meta: Meta<typeof VacancyProcessCard> = {
    title: 'Molecules/VacancyProcessCard',
    component: VacancyProcessCard,
    args: {
        ...vacancyProcessCard,
    }
}

export default meta

type Story = StoryObj<typeof VacancyProcessCard>

export const Default: Story = {}