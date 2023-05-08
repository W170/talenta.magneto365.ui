import { Breadcrumb } from './Breadcrum.component'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Atoms/Breadcrum',
  component: Breadcrumb,
  args: {
    url: 'jobs/vacants',
    label: 'Todos los empleos'
  }
}

export default meta

type Story = StoryObj<typeof Breadcrumb>

export const Default: Story = {}

export const ActiveBreadcrum: Story = {
  args: {
    IsActive: true
  }
}
