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
    offerSkillsLabel: 'Habilidades',
    offerSkills: [
      { name: 'Habilidades comerciales', score: 1 },
      { name: 'Capacidad de negociación', score: 2 },
      { name: 'Conocimiento de microfinanzas', score: 4 }
    ]
  }
}
