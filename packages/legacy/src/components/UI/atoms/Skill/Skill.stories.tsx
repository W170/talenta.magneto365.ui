import { Meta, StoryObj } from '@storybook/react'
import { Skill } from './Skill.component'

const meta: Meta<typeof Skill> = {
  title: 'Atoms/ Skill',
  component: Skill,
  args: {}
}

export default meta

type Story = StoryObj<typeof Skill>

export const Default: Story = {
  args: {
    name: 'Habilidades comerciales',
    score: 1
  }
}
