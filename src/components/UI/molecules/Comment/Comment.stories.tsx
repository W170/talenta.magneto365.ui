import { Meta, StoryObj } from '@storybook/react'
import { Comment } from './Comment.component'
import { CommentProps } from '@constants/stories/common.constants'

const meta: Meta<typeof Comment> = {
  title: 'Molecules/Comment',
  component: Comment,
  args: { ...CommentProps }
}

export default meta

type Story = StoryObj<typeof Comment>

export const Default: Story = {}
