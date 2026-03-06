import { Meta, StoryObj } from '@storybook/react'
import InlineDetails from './InlineDetails.component'
import { inlineDetailsProps } from '../../../../constants/stories/InlineDetails.contants'

const meta: Meta<typeof InlineDetails> = {
  title: 'Atoms/Inline Details',
  component: InlineDetails,
  args: {}
}

export default meta

type Story = StoryObj<typeof Image>

export const Default: Story = {
  args: inlineDetailsProps
}
