import { StoryObj, Meta } from '@storybook/react'
import { Collapse } from './'

const meta: Meta<typeof Collapse> = {
  title: 'Molecules/Collapse',
  component: Collapse,
  args: {}
}

export default meta

type Story = StoryObj<typeof Collapse>

export const Default: Story = {}
