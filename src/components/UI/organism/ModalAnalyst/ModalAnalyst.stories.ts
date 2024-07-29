import { Meta, StoryObj } from '@storybook/react'
import { ModalAnalystProps } from '@constants/stories'
import { ModalAnalyst } from './ModalAnalyst.component'

const meta: Meta<typeof ModalAnalyst> = {
  title: 'Organism/Modal Analyst',
  component: ModalAnalyst,
  args: { ...ModalAnalystProps }
}

export default meta

type Story = StoryObj<typeof ModalAnalyst>

export const Default: Story = {}
