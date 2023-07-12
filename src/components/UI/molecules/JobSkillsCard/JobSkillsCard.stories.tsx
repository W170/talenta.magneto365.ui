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
      { skillText: 'Habilidades comerciales', skillLevel: 'Intermediate' },
      { skillText: 'Capacidad de negociación', skillLevel: 'Advanced' },
      { skillText: 'Conocimiento de microfinanzas', skillLevel: 'Basic' }
    ]
  }
}
