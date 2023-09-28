import { Meta, StoryObj } from '@storybook/react'
import { EmptyResults } from '.'
import { emptyResultsProps } from '../../../../constants/stories/emptyResults.constants'

const meta: Meta<typeof EmptyResults> = {
  title: 'Molecules/EmptyResults',
  component: EmptyResults,
  tags: ['autodocs'],
  args: {
    ...emptyResultsProps
  },
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof EmptyResults>

export const Default: Story = {}
