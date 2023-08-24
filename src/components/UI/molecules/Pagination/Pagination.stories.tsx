import { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './Pagination.component'

const meta: Meta<typeof Pagination> = {
  title: 'Molecules/ Pagination',
  component: Pagination,
  args: {
    total: 826,
    current: 4,
    pageSize: 20,
    loading: false,
    numberOfButtons: 5,
    prevTitle: 'Anterior',
    nextTitle: 'Siguiente',
    onChange: (page: number, pageSize: number) => console.log('Pagination: ', { page, pageSize })
  }
}

export default meta

type Story = StoryObj<typeof Pagination>

export const Default: Story = {}
