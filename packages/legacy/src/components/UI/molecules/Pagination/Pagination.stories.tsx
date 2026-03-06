import { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './Pagination.component'
import { paginationProps } from '@constants/stories'

const meta: Meta<typeof Pagination> = {
  title: 'Molecules/ Pagination',
  component: Pagination,
  args: paginationProps
}

export default meta

type Story = StoryObj<typeof Pagination>

export const Default: Story = {}
