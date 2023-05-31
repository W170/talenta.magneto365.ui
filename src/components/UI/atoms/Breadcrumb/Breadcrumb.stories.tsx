import { Breadcrumb } from './Breadcrumb.component'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Atoms/Breadcrumb',
  component: Breadcrumb,
  args: {
    breadcrumbText: 'Todos los empleos'
  }
}

export default meta

type Story = StoryObj<typeof Breadcrumb>

export const Default: Story = {}

export const ActiveBreadcrum: Story = {
  args: {
    isActive: true
  }
}
