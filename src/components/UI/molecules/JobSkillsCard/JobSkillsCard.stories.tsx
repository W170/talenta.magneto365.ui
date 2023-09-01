import { Meta, StoryObj } from '@storybook/react'

import { JobSkillsCard } from './JobSkillsCard.component'

const meta: Meta<typeof JobSkillsCard> = {
  title: 'Molecules/Job Skills Card',
  component: JobSkillsCard,
  args: {}
}

export default meta

type Story = StoryObj<typeof JobSkillsCard>

export const Default: Story = {
  args: {
    jobSkillCardHeader: 'Habilidades',
    jobSkills: [
      { id: 1, name: 'Habilidades comerciales', score: 1 },
      { id: 2, name: 'Capacidad de negociación', score: 2 },
      { id: 3, name: 'Conocimiento de microfinanzas', score: 4 }
    ]
  }
}
